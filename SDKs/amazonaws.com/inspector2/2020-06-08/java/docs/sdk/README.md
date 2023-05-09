# SDK

## Overview

Amazon Inspector is a vulnerability discovery service that automates continuous scanning for security vulnerabilities within your Amazon EC2 and Amazon ECR environments.

Amazon Web Services documentation
<https://docs.aws.amazon.com/inspector2/>
### Available Operations

* [associateMember](#associatemember) - Associates an Amazon Web Services account with an Amazon Inspector delegated administrator.
* [batchGetAccountStatus](#batchgetaccountstatus) - Retrieves the Amazon Inspector status of multiple Amazon Web Services accounts within your environment.
* [batchGetFreeTrialInfo](#batchgetfreetrialinfo) - Gets free trial status for multiple Amazon Web Services accounts.
* [cancelFindingsReport](#cancelfindingsreport) - Cancels the given findings report.
* [createFilter](#createfilter) - Creates a filter resource using specified filter criteria.
* [createFindingsReport](#createfindingsreport) - Creates a finding report.
* [deleteFilter](#deletefilter) - Deletes a filter resource.
* [describeOrganizationConfiguration](#describeorganizationconfiguration) - Describe Amazon Inspector configuration settings for an Amazon Web Services organization.
* [disable](#disable) - Disables Amazon Inspector scans for one or more Amazon Web Services accounts. Disabling all scan types in an account disables the Amazon Inspector service.
* [disableDelegatedAdminAccount](#disabledelegatedadminaccount) - Disables the Amazon Inspector delegated administrator for your organization.
* [disassociateMember](#disassociatemember) - Disassociates a member account from an Amazon Inspector delegated administrator.
* [enable](#enable) - Enables Amazon Inspector scans for one or more Amazon Web Services accounts.
* [enableDelegatedAdminAccount](#enabledelegatedadminaccount) - Enables the Amazon Inspector delegated administrator for your Organizations organization.
* [getConfiguration](#getconfiguration) - Retrieves setting configurations for Inspector scans.
* [getDelegatedAdminAccount](#getdelegatedadminaccount) - Retrieves information about the Amazon Inspector delegated administrator for your organization.
* [getFindingsReportStatus](#getfindingsreportstatus) - Gets the status of a findings report.
* [getMember](#getmember) - Gets member information for your organization.
* [listAccountPermissions](#listaccountpermissions) - Lists the permissions an account has to configure Amazon Inspector.
* [listCoverage](#listcoverage) - Lists coverage details for you environment.
* [listCoverageStatistics](#listcoveragestatistics) - Lists Amazon Inspector coverage statistics for your environment.
* [listDelegatedAdminAccounts](#listdelegatedadminaccounts) - Lists information about the Amazon Inspector delegated administrator of your organization.
* [listFilters](#listfilters) - Lists the filters associated with your account.
* [listFindingAggregations](#listfindingaggregations) - Lists aggregated finding data for your environment based on specific criteria.
* [listFindings](#listfindings) - Lists findings for your environment.
* [listMembers](#listmembers) - List members associated with the Amazon Inspector delegated administrator for your organization.
* [listTagsForResource](#listtagsforresource) - Lists all tags attached to a given resource.
* [listUsageTotals](#listusagetotals) - Lists the Amazon Inspector usage totals over the last 30 days.
* [tagResource](#tagresource) - Adds tags to a resource.
* [untagResource](#untagresource) - Removes tags from a resource.
* [updateConfiguration](#updateconfiguration) - Updates setting configurations for your Amazon Inspector account. When you use this API as an Amazon Inspector delegated administrator this updates the setting for all accounts you manage. Member accounts in an organization cannot update this setting.
* [updateFilter](#updatefilter) - Specifies the action that is to be applied to the findings that match the filter.
* [updateOrganizationConfiguration](#updateorganizationconfiguration) - Updates the configurations for your Amazon Inspector organization.

## associateMember

Associates an Amazon Web Services account with an Amazon Inspector delegated administrator.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateMemberRequest;
import org.openapis.openapi.models.operations.AssociateMemberRequestBody;
import org.openapis.openapi.models.operations.AssociateMemberResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateMemberRequest req = new AssociateMemberRequest(                new AssociateMemberRequestBody("deserunt");) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            AssociateMemberResponse res = sdk.sdk.associateMember(req);

            if (res.associateMemberResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchGetAccountStatus

Retrieves the Amazon Inspector status of multiple Amazon Web Services accounts within your environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetAccountStatusRequest;
import org.openapis.openapi.models.operations.BatchGetAccountStatusRequestBody;
import org.openapis.openapi.models.operations.BatchGetAccountStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetAccountStatusRequest req = new BatchGetAccountStatusRequest(                new BatchGetAccountStatusRequestBody() {{
                                accountIds = new String[]{{
                                    add("minus"),
                                    add("placeat"),
                                }};
                            }};) {{
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "excepturi";
                xAmzDate = "nisi";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "ab";
            }};            

            BatchGetAccountStatusResponse res = sdk.sdk.batchGetAccountStatus(req);

            if (res.batchGetAccountStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchGetFreeTrialInfo

Gets free trial status for multiple Amazon Web Services accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetFreeTrialInfoRequest;
import org.openapis.openapi.models.operations.BatchGetFreeTrialInfoRequestBody;
import org.openapis.openapi.models.operations.BatchGetFreeTrialInfoResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetFreeTrialInfoRequest req = new BatchGetFreeTrialInfoRequest(                new BatchGetFreeTrialInfoRequestBody(                new String[]{{
                                                add("deserunt"),
                                            }});) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "repellendus";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "quo";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "at";
            }};            

            BatchGetFreeTrialInfoResponse res = sdk.sdk.batchGetFreeTrialInfo(req);

            if (res.batchGetFreeTrialInfoResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelFindingsReport

Cancels the given findings report.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelFindingsReportRequest;
import org.openapis.openapi.models.operations.CancelFindingsReportRequestBody;
import org.openapis.openapi.models.operations.CancelFindingsReportResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelFindingsReportRequest req = new CancelFindingsReportRequest(                new CancelFindingsReportRequestBody("maiores");) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "quod";
                xAmzCredential = "quod";
                xAmzDate = "esse";
                xAmzSecurityToken = "totam";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "dolorum";
            }};            

            CancelFindingsReportResponse res = sdk.sdk.cancelFindingsReport(req);

            if (res.cancelFindingsReportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFilter

Creates a filter resource using specified filter criteria.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFilterRequest;
import org.openapis.openapi.models.operations.CreateFilterRequestBody;
import org.openapis.openapi.models.operations.CreateFilterRequestBodyActionEnum;
import org.openapis.openapi.models.operations.CreateFilterRequestBodyFilterCriteria;
import org.openapis.openapi.models.operations.CreateFilterResponse;
import org.openapis.openapi.models.shared.DateFilter;
import org.openapis.openapi.models.shared.MapComparisonEnum;
import org.openapis.openapi.models.shared.MapFilter;
import org.openapis.openapi.models.shared.NumberFilter;
import org.openapis.openapi.models.shared.PackageFilter;
import org.openapis.openapi.models.shared.PortRangeFilter;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StringComparisonEnum;
import org.openapis.openapi.models.shared.StringFilter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateFilterRequest req = new CreateFilterRequest(                new CreateFilterRequestBody(CreateFilterRequestBodyActionEnum.SUPPRESS,                 new CreateFilterRequestBodyFilterCriteria() {{
                                                awsAccountId = new org.openapis.openapi.models.shared.StringFilter[]{{
                                                    add(new StringFilter(StringComparisonEnum.PREFIX, "hic") {{
                                                        comparison = StringComparisonEnum.PREFIX;
                                                        value = "fugit";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.EQUALS, "commodi") {{
                                                        comparison = StringComparisonEnum.NOT_EQUALS;
                                                        value = "totam";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.EQUALS, "impedit") {{
                                                        comparison = StringComparisonEnum.PREFIX;
                                                        value = "modi";
                                                    }}),
                                                }};
                                                componentId = new org.openapis.openapi.models.shared.StringFilter[]{{
                                                    add(new StringFilter(StringComparisonEnum.PREFIX, "aspernatur") {{
                                                        comparison = StringComparisonEnum.PREFIX;
                                                        value = "ipsum";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.PREFIX, "sed") {{
                                                        comparison = StringComparisonEnum.EQUALS;
                                                        value = "ad";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.PREFIX, "laboriosam") {{
                                                        comparison = StringComparisonEnum.PREFIX;
                                                        value = "dolor";
                                                    }}),
                                                }};
                                                componentType = new org.openapis.openapi.models.shared.StringFilter[]{{
                                                    add(new StringFilter(StringComparisonEnum.PREFIX, "corporis") {{
                                                        comparison = StringComparisonEnum.NOT_EQUALS;
                                                        value = "fuga";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "quidem") {{
                                                        comparison = StringComparisonEnum.PREFIX;
                                                        value = "iure";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "est") {{
                                                        comparison = StringComparisonEnum.EQUALS;
                                                        value = "ipsa";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.EQUALS, "dolorem") {{
                                                        comparison = StringComparisonEnum.PREFIX;
                                                        value = "laborum";
                                                    }}),
                                                }};
                                                ec2InstanceImageId = new org.openapis.openapi.models.shared.StringFilter[]{{
                                                    add(new StringFilter(StringComparisonEnum.EQUALS, "omnis") {{
                                                        comparison = StringComparisonEnum.EQUALS;
                                                        value = "nobis";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.PREFIX, "accusantium") {{
                                                        comparison = StringComparisonEnum.PREFIX;
                                                        value = "minima";
                                                    }}),
                                                }};
                                                ec2InstanceSubnetId = new org.openapis.openapi.models.shared.StringFilter[]{{
                                                    add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "architecto") {{
                                                        comparison = StringComparisonEnum.PREFIX;
                                                        value = "doloribus";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.PREFIX, "consequuntur") {{
                                                        comparison = StringComparisonEnum.PREFIX;
                                                        value = "dolorem";
                                                    }}),
                                                }};
                                                ec2InstanceVpcId = new org.openapis.openapi.models.shared.StringFilter[]{{
                                                    add(new StringFilter(StringComparisonEnum.EQUALS, "commodi") {{
                                                        comparison = StringComparisonEnum.PREFIX;
                                                        value = "occaecati";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.EQUALS, "error") {{
                                                        comparison = StringComparisonEnum.PREFIX;
                                                        value = "molestiae";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.EQUALS, "laborum") {{
                                                        comparison = StringComparisonEnum.EQUALS;
                                                        value = "quis";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.EQUALS, "quo") {{
                                                        comparison = StringComparisonEnum.PREFIX;
                                                        value = "enim";
                                                    }}),
                                                }};
                                                ecrImageArchitecture = new org.openapis.openapi.models.shared.StringFilter[]{{
                                                    add(new StringFilter(StringComparisonEnum.PREFIX, "possimus") {{
                                                        comparison = StringComparisonEnum.NOT_EQUALS;
                                                        value = "ipsam";
                                                    }}),
                                                }};
                                                ecrImageHash = new org.openapis.openapi.models.shared.StringFilter[]{{
                                                    add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "laborum") {{
                                                        comparison = StringComparisonEnum.EQUALS;
                                                        value = "error";
                                                    }}),
                                                }};
                                                ecrImagePushedAt = new org.openapis.openapi.models.shared.DateFilter[]{{
                                                    add(new DateFilter() {{
                                                        endInclusive = OffsetDateTime.parse("2020-01-27T18:38:42.890Z");
                                                        startInclusive = OffsetDateTime.parse("2021-08-05T19:50:46.898Z");
                                                    }}),
                                                }};
                                                ecrImageRegistry = new org.openapis.openapi.models.shared.StringFilter[]{{
                                                    add(new StringFilter(StringComparisonEnum.PREFIX, "voluptate") {{
                                                        comparison = StringComparisonEnum.NOT_EQUALS;
                                                        value = "ipsa";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.EQUALS, "reprehenderit") {{
                                                        comparison = StringComparisonEnum.NOT_EQUALS;
                                                        value = "perferendis";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.EQUALS, "corporis") {{
                                                        comparison = StringComparisonEnum.EQUALS;
                                                        value = "maiores";
                                                    }}),
                                                }};
                                                ecrImageRepositoryName = new org.openapis.openapi.models.shared.StringFilter[]{{
                                                    add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "enim") {{
                                                        comparison = StringComparisonEnum.PREFIX;
                                                        value = "dicta";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "quae") {{
                                                        comparison = StringComparisonEnum.NOT_EQUALS;
                                                        value = "commodi";
                                                    }}),
                                                }};
                                                ecrImageTags = new org.openapis.openapi.models.shared.StringFilter[]{{
                                                    add(new StringFilter(StringComparisonEnum.PREFIX, "pariatur") {{
                                                        comparison = StringComparisonEnum.NOT_EQUALS;
                                                        value = "molestias";
                                                    }}),
                                                }};
                                                exploitAvailable = new org.openapis.openapi.models.shared.StringFilter[]{{
                                                    add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "quasi") {{
                                                        comparison = StringComparisonEnum.PREFIX;
                                                        value = "rem";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.EQUALS, "itaque") {{
                                                        comparison = StringComparisonEnum.NOT_EQUALS;
                                                        value = "sint";
                                                    }}),
                                                }};
                                                findingArn = new org.openapis.openapi.models.shared.StringFilter[]{{
                                                    add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "quibusdam") {{
                                                        comparison = StringComparisonEnum.EQUALS;
                                                        value = "consequatur";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "quibusdam") {{
                                                        comparison = StringComparisonEnum.EQUALS;
                                                        value = "deserunt";
                                                    }}),
                                                }};
                                                findingStatus = new org.openapis.openapi.models.shared.StringFilter[]{{
                                                    add(new StringFilter(StringComparisonEnum.PREFIX, "cupiditate") {{
                                                        comparison = StringComparisonEnum.EQUALS;
                                                        value = "qui";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.EQUALS, "assumenda") {{
                                                        comparison = StringComparisonEnum.PREFIX;
                                                        value = "perferendis";
                                                    }}),
                                                }};
                                                findingType = new org.openapis.openapi.models.shared.StringFilter[]{{
                                                    add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "excepturi") {{
                                                        comparison = StringComparisonEnum.EQUALS;
                                                        value = "fugit";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "labore") {{
                                                        comparison = StringComparisonEnum.EQUALS;
                                                        value = "facilis";
                                                    }}),
                                                }};
                                                firstObservedAt = new org.openapis.openapi.models.shared.DateFilter[]{{
                                                    add(new DateFilter() {{
                                                        endInclusive = OffsetDateTime.parse("2022-10-02T04:55:20.234Z");
                                                        startInclusive = OffsetDateTime.parse("2021-04-10T02:35:06.342Z");
                                                    }}),
                                                    add(new DateFilter() {{
                                                        endInclusive = OffsetDateTime.parse("2022-05-29T21:42:45.399Z");
                                                        startInclusive = OffsetDateTime.parse("2021-04-14T09:13:11.675Z");
                                                    }}),
                                                    add(new DateFilter() {{
                                                        endInclusive = OffsetDateTime.parse("2022-07-22T03:36:34.615Z");
                                                        startInclusive = OffsetDateTime.parse("2020-02-22T17:45:21.686Z");
                                                    }}),
                                                    add(new DateFilter() {{
                                                        endInclusive = OffsetDateTime.parse("2022-02-08T14:21:47.573Z");
                                                        startInclusive = OffsetDateTime.parse("2022-02-26T01:27:36.152Z");
                                                    }}),
                                                }};
                                                fixAvailable = new org.openapis.openapi.models.shared.StringFilter[]{{
                                                    add(new StringFilter(StringComparisonEnum.EQUALS, "cumque") {{
                                                        comparison = StringComparisonEnum.NOT_EQUALS;
                                                        value = "dicta";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.PREFIX, "laborum") {{
                                                        comparison = StringComparisonEnum.NOT_EQUALS;
                                                        value = "ea";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.PREFIX, "enim") {{
                                                        comparison = StringComparisonEnum.NOT_EQUALS;
                                                        value = "non";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "provident") {{
                                                        comparison = StringComparisonEnum.NOT_EQUALS;
                                                        value = "delectus";
                                                    }}),
                                                }};
                                                inspectorScore = new org.openapis.openapi.models.shared.NumberFilter[]{{
                                                    add(new NumberFilter() {{
                                                        lowerInclusive = 6596.69;
                                                        upperInclusive = 5013.24;
                                                    }}),
                                                    add(new NumberFilter() {{
                                                        lowerInclusive = 5332.06;
                                                        upperInclusive = 9560.84;
                                                    }}),
                                                    add(new NumberFilter() {{
                                                        lowerInclusive = 2305.33;
                                                        upperInclusive = 6439.9;
                                                    }}),
                                                }};
                                                lambdaFunctionExecutionRoleArn = new org.openapis.openapi.models.shared.StringFilter[]{{
                                                    add(new StringFilter(StringComparisonEnum.PREFIX, "molestiae") {{
                                                        comparison = StringComparisonEnum.PREFIX;
                                                        value = "natus";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.EQUALS, "distinctio") {{
                                                        comparison = StringComparisonEnum.EQUALS;
                                                        value = "nihil";
                                                    }}),
                                                }};
                                                lambdaFunctionLastModifiedAt = new org.openapis.openapi.models.shared.DateFilter[]{{
                                                    add(new DateFilter() {{
                                                        endInclusive = OffsetDateTime.parse("2022-09-17T02:55:11.783Z");
                                                        startInclusive = OffsetDateTime.parse("2022-05-20T10:11:05.115Z");
                                                    }}),
                                                    add(new DateFilter() {{
                                                        endInclusive = OffsetDateTime.parse("2022-02-21T23:58:20.071Z");
                                                        startInclusive = OffsetDateTime.parse("2022-08-05T15:44:28.456Z");
                                                    }}),
                                                    add(new DateFilter() {{
                                                        endInclusive = OffsetDateTime.parse("2022-09-14T03:02:47.808Z");
                                                        startInclusive = OffsetDateTime.parse("2022-06-06T23:06:26.119Z");
                                                    }}),
                                                }};
                                                lambdaFunctionLayers = new org.openapis.openapi.models.shared.StringFilter[]{{
                                                    add(new StringFilter(StringComparisonEnum.PREFIX, "accusantium") {{
                                                        comparison = StringComparisonEnum.PREFIX;
                                                        value = "quos";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.PREFIX, "ad") {{
                                                        comparison = StringComparisonEnum.PREFIX;
                                                        value = "reiciendis";
                                                    }}),
                                                }};
                                                lambdaFunctionName = new org.openapis.openapi.models.shared.StringFilter[]{{
                                                    add(new StringFilter(StringComparisonEnum.EQUALS, "nemo") {{
                                                        comparison = StringComparisonEnum.EQUALS;
                                                        value = "necessitatibus";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "debitis") {{
                                                        comparison = StringComparisonEnum.EQUALS;
                                                        value = "iure";
                                                    }}),
                                                }};
                                                lambdaFunctionRuntime = new org.openapis.openapi.models.shared.StringFilter[]{{
                                                    add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "in") {{
                                                        comparison = StringComparisonEnum.NOT_EQUALS;
                                                        value = "deleniti";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "ullam") {{
                                                        comparison = StringComparisonEnum.EQUALS;
                                                        value = "architecto";
                                                    }}),
                                                }};
                                                lastObservedAt = new org.openapis.openapi.models.shared.DateFilter[]{{
                                                    add(new DateFilter() {{
                                                        endInclusive = OffsetDateTime.parse("2022-01-01T10:06:00.916Z");
                                                        startInclusive = OffsetDateTime.parse("2022-07-21T08:29:53.942Z");
                                                    }}),
                                                    add(new DateFilter() {{
                                                        endInclusive = OffsetDateTime.parse("2020-05-25T09:38:49.528Z");
                                                        startInclusive = OffsetDateTime.parse("2022-11-02T16:33:42.080Z");
                                                    }}),
                                                    add(new DateFilter() {{
                                                        endInclusive = OffsetDateTime.parse("2021-10-08T15:23:46.576Z");
                                                        startInclusive = OffsetDateTime.parse("2022-11-16T19:20:12.159Z");
                                                    }}),
                                                }};
                                                networkProtocol = new org.openapis.openapi.models.shared.StringFilter[]{{
                                                    add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "ea") {{
                                                        comparison = StringComparisonEnum.NOT_EQUALS;
                                                        value = "pariatur";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.PREFIX, "accusantium") {{
                                                        comparison = StringComparisonEnum.PREFIX;
                                                        value = "odit";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "ipsam") {{
                                                        comparison = StringComparisonEnum.EQUALS;
                                                        value = "maiores";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "eaque") {{
                                                        comparison = StringComparisonEnum.PREFIX;
                                                        value = "autem";
                                                    }}),
                                                }};
                                                portRange = new org.openapis.openapi.models.shared.PortRangeFilter[]{{
                                                    add(new PortRangeFilter() {{
                                                        beginInclusive = 365496L;
                                                        endInclusive = 975522L;
                                                    }}),
                                                    add(new PortRangeFilter() {{
                                                        beginInclusive = 16627L;
                                                        endInclusive = 855804L;
                                                    }}),
                                                    add(new PortRangeFilter() {{
                                                        beginInclusive = 230742L;
                                                        endInclusive = 11714L;
                                                    }}),
                                                    add(new PortRangeFilter() {{
                                                        beginInclusive = 764912L;
                                                        endInclusive = 359978L;
                                                    }}),
                                                }};
                                                relatedVulnerabilities = new org.openapis.openapi.models.shared.StringFilter[]{{
                                                    add(new StringFilter(StringComparisonEnum.EQUALS, "quis") {{
                                                        comparison = StringComparisonEnum.NOT_EQUALS;
                                                        value = "nobis";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.EQUALS, "quis") {{
                                                        comparison = StringComparisonEnum.PREFIX;
                                                        value = "dignissimos";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.EQUALS, "dolores") {{
                                                        comparison = StringComparisonEnum.EQUALS;
                                                        value = "eos";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.EQUALS, "vero") {{
                                                        comparison = StringComparisonEnum.NOT_EQUALS;
                                                        value = "quam";
                                                    }}),
                                                }};
                                                resourceId = new org.openapis.openapi.models.shared.StringFilter[]{{
                                                    add(new StringFilter(StringComparisonEnum.PREFIX, "facilis") {{
                                                        comparison = StringComparisonEnum.NOT_EQUALS;
                                                        value = "recusandae";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "consequuntur") {{
                                                        comparison = StringComparisonEnum.PREFIX;
                                                        value = "voluptatem";
                                                    }}),
                                                }};
                                                resourceTags = new org.openapis.openapi.models.shared.MapFilter[]{{
                                                    add(new MapFilter(MapComparisonEnum.EQUALS, "occaecati") {{
                                                        comparison = MapComparisonEnum.EQUALS;
                                                        key = "error";
                                                        value = "eaque";
                                                    }}),
                                                    add(new MapFilter(MapComparisonEnum.EQUALS, "asperiores") {{
                                                        comparison = MapComparisonEnum.EQUALS;
                                                        key = "rerum";
                                                        value = "adipisci";
                                                    }}),
                                                    add(new MapFilter(MapComparisonEnum.EQUALS, "iste") {{
                                                        comparison = MapComparisonEnum.EQUALS;
                                                        key = "earum";
                                                        value = "modi";
                                                    }}),
                                                }};
                                                resourceType = new org.openapis.openapi.models.shared.StringFilter[]{{
                                                    add(new StringFilter(StringComparisonEnum.PREFIX, "nobis") {{
                                                        comparison = StringComparisonEnum.PREFIX;
                                                        value = "pariatur";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.EQUALS, "quos") {{
                                                        comparison = StringComparisonEnum.NOT_EQUALS;
                                                        value = "delectus";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.EQUALS, "dolor") {{
                                                        comparison = StringComparisonEnum.PREFIX;
                                                        value = "dolorem";
                                                    }}),
                                                }};
                                                severity = new org.openapis.openapi.models.shared.StringFilter[]{{
                                                    add(new StringFilter(StringComparisonEnum.PREFIX, "cum") {{
                                                        comparison = StringComparisonEnum.EQUALS;
                                                        value = "hic";
                                                    }}),
                                                }};
                                                title = new org.openapis.openapi.models.shared.StringFilter[]{{
                                                    add(new StringFilter(StringComparisonEnum.EQUALS, "dolorum") {{
                                                        comparison = StringComparisonEnum.PREFIX;
                                                        value = "reiciendis";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.EQUALS, "ipsa") {{
                                                        comparison = StringComparisonEnum.EQUALS;
                                                        value = "veritatis";
                                                    }}),
                                                }};
                                                updatedAt = new org.openapis.openapi.models.shared.DateFilter[]{{
                                                    add(new DateFilter() {{
                                                        endInclusive = OffsetDateTime.parse("2022-09-09T04:40:04.540Z");
                                                        startInclusive = OffsetDateTime.parse("2020-11-29T12:05:35.198Z");
                                                    }}),
                                                    add(new DateFilter() {{
                                                        endInclusive = OffsetDateTime.parse("2021-11-13T08:40:53.559Z");
                                                        startInclusive = OffsetDateTime.parse("2022-08-22T21:20:36.034Z");
                                                    }}),
                                                }};
                                                vendorSeverity = new org.openapis.openapi.models.shared.StringFilter[]{{
                                                    add(new StringFilter(StringComparisonEnum.EQUALS, "soluta") {{
                                                        comparison = StringComparisonEnum.EQUALS;
                                                        value = "fugiat";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.PREFIX, "dolorum") {{
                                                        comparison = StringComparisonEnum.NOT_EQUALS;
                                                        value = "iusto";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "distinctio") {{
                                                        comparison = StringComparisonEnum.PREFIX;
                                                        value = "omnis";
                                                    }}),
                                                }};
                                                vulnerabilityId = new org.openapis.openapi.models.shared.StringFilter[]{{
                                                    add(new StringFilter(StringComparisonEnum.PREFIX, "id") {{
                                                        comparison = StringComparisonEnum.PREFIX;
                                                        value = "ipsum";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.EQUALS, "perferendis") {{
                                                        comparison = StringComparisonEnum.NOT_EQUALS;
                                                        value = "eius";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "ad") {{
                                                        comparison = StringComparisonEnum.EQUALS;
                                                        value = "optio";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.PREFIX, "provident") {{
                                                        comparison = StringComparisonEnum.NOT_EQUALS;
                                                        value = "suscipit";
                                                    }}),
                                                }};
                                                vulnerabilitySource = new org.openapis.openapi.models.shared.StringFilter[]{{
                                                    add(new StringFilter(StringComparisonEnum.PREFIX, "alias") {{
                                                        comparison = StringComparisonEnum.NOT_EQUALS;
                                                        value = "totam";
                                                    }}),
                                                    add(new StringFilter(StringComparisonEnum.EQUALS, "vel") {{
                                                        comparison = StringComparisonEnum.NOT_EQUALS;
                                                        value = "quaerat";
                                                    }}),
                                                }};
                                                vulnerablePackages = new org.openapis.openapi.models.shared.PackageFilter[]{{
                                                    add(new PackageFilter() {{
                                                        architecture = new StringFilter(StringComparisonEnum.NOT_EQUALS, "a") {{
                                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                                            value = "qui";
                                                        }};
                                                        epoch = new NumberFilter() {{
                                                            lowerInclusive = 4561.3;
                                                            upperInclusive = 6874.88;
                                                        }};
                                                        name = new StringFilter(StringComparisonEnum.NOT_EQUALS, "tenetur") {{
                                                            comparison = StringComparisonEnum.PREFIX;
                                                            value = "ipsum";
                                                        }};
                                                        release = new StringFilter(StringComparisonEnum.NOT_EQUALS, "numquam") {{
                                                            comparison = StringComparisonEnum.EQUALS;
                                                            value = "tempore";
                                                        }};
                                                        sourceLambdaLayerArn = new StringFilter(StringComparisonEnum.NOT_EQUALS, "totam") {{
                                                            comparison = StringComparisonEnum.EQUALS;
                                                            value = "dolorem";
                                                        }};
                                                        sourceLayerHash = new StringFilter(StringComparisonEnum.NOT_EQUALS, "neque") {{
                                                            comparison = StringComparisonEnum.PREFIX;
                                                            value = "sit";
                                                        }};
                                                        version = new StringFilter(StringComparisonEnum.NOT_EQUALS, "voluptas") {{
                                                            comparison = StringComparisonEnum.EQUALS;
                                                            value = "vel";
                                                        }};
                                                    }}),
                                                    add(new PackageFilter() {{
                                                        architecture = new StringFilter(StringComparisonEnum.EQUALS, "incidunt") {{
                                                            comparison = StringComparisonEnum.PREFIX;
                                                            value = "quam";
                                                        }};
                                                        epoch = new NumberFilter() {{
                                                            lowerInclusive = 1864.58;
                                                            upperInclusive = 5867.84;
                                                        }};
                                                        name = new StringFilter(StringComparisonEnum.NOT_EQUALS, "dicta") {{
                                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                                            value = "pariatur";
                                                        }};
                                                        release = new StringFilter(StringComparisonEnum.EQUALS, "aspernatur") {{
                                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                                            value = "totam";
                                                        }};
                                                        sourceLambdaLayerArn = new StringFilter(StringComparisonEnum.NOT_EQUALS, "aliquid") {{
                                                            comparison = StringComparisonEnum.EQUALS;
                                                            value = "distinctio";
                                                        }};
                                                        sourceLayerHash = new StringFilter(StringComparisonEnum.NOT_EQUALS, "qui") {{
                                                            comparison = StringComparisonEnum.PREFIX;
                                                            value = "molestias";
                                                        }};
                                                        version = new StringFilter(StringComparisonEnum.EQUALS, "odio") {{
                                                            comparison = StringComparisonEnum.EQUALS;
                                                            value = "fugit";
                                                        }};
                                                    }}),
                                                    add(new PackageFilter() {{
                                                        architecture = new StringFilter(StringComparisonEnum.NOT_EQUALS, "hic") {{
                                                            comparison = StringComparisonEnum.EQUALS;
                                                            value = "ullam";
                                                        }};
                                                        epoch = new NumberFilter() {{
                                                            lowerInclusive = 304.52;
                                                            upperInclusive = 7653.26;
                                                        }};
                                                        name = new StringFilter(StringComparisonEnum.EQUALS, "saepe") {{
                                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                                            value = "nobis";
                                                        }};
                                                        release = new StringFilter(StringComparisonEnum.NOT_EQUALS, "quos") {{
                                                            comparison = StringComparisonEnum.EQUALS;
                                                            value = "veritatis";
                                                        }};
                                                        sourceLambdaLayerArn = new StringFilter(StringComparisonEnum.EQUALS, "delectus") {{
                                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                                            value = "cupiditate";
                                                        }};
                                                        sourceLayerHash = new StringFilter(StringComparisonEnum.EQUALS, "adipisci") {{
                                                            comparison = StringComparisonEnum.EQUALS;
                                                            value = "dolore";
                                                        }};
                                                        version = new StringFilter(StringComparisonEnum.EQUALS, "aut") {{
                                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                                            value = "architecto";
                                                        }};
                                                    }}),
                                                    add(new PackageFilter() {{
                                                        architecture = new StringFilter(StringComparisonEnum.EQUALS, "est") {{
                                                            comparison = StringComparisonEnum.PREFIX;
                                                            value = "itaque";
                                                        }};
                                                        epoch = new NumberFilter() {{
                                                            lowerInclusive = 8330.38;
                                                            upperInclusive = 7851.53;
                                                        }};
                                                        name = new StringFilter(StringComparisonEnum.NOT_EQUALS, "cupiditate") {{
                                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                                            value = "ut";
                                                        }};
                                                        release = new StringFilter(StringComparisonEnum.PREFIX, "odio") {{
                                                            comparison = StringComparisonEnum.EQUALS;
                                                            value = "quae";
                                                        }};
                                                        sourceLambdaLayerArn = new StringFilter(StringComparisonEnum.NOT_EQUALS, "vero") {{
                                                            comparison = StringComparisonEnum.PREFIX;
                                                            value = "voluptatibus";
                                                        }};
                                                        sourceLayerHash = new StringFilter(StringComparisonEnum.EQUALS, "delectus") {{
                                                            comparison = StringComparisonEnum.PREFIX;
                                                            value = "quis";
                                                        }};
                                                        version = new StringFilter(StringComparisonEnum.NOT_EQUALS, "tenetur") {{
                                                            comparison = StringComparisonEnum.PREFIX;
                                                            value = "consectetur";
                                                        }};
                                                    }}),
                                                }};
                                            }};, "dignissimos") {{
                                description = "hic";
                                reason = "distinctio";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("odio", "similique");
                                    put("facilis", "vero");
                                    put("ducimus", "dolore");
                                    put("quibusdam", "illum");
                                }};
                            }};) {{
                xAmzAlgorithm = "sequi";
                xAmzContentSha256 = "natus";
                xAmzCredential = "impedit";
                xAmzDate = "aut";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "exercitationem";
                xAmzSignedHeaders = "nulla";
            }};            

            CreateFilterResponse res = sdk.sdk.createFilter(req);

            if (res.createFilterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFindingsReport

Creates a finding report.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFindingsReportRequest;
import org.openapis.openapi.models.operations.CreateFindingsReportRequestBody;
import org.openapis.openapi.models.operations.CreateFindingsReportRequestBodyFilterCriteria;
import org.openapis.openapi.models.operations.CreateFindingsReportRequestBodyReportFormatEnum;
import org.openapis.openapi.models.operations.CreateFindingsReportRequestBodyS3Destination;
import org.openapis.openapi.models.operations.CreateFindingsReportResponse;
import org.openapis.openapi.models.shared.DateFilter;
import org.openapis.openapi.models.shared.MapComparisonEnum;
import org.openapis.openapi.models.shared.MapFilter;
import org.openapis.openapi.models.shared.NumberFilter;
import org.openapis.openapi.models.shared.PackageFilter;
import org.openapis.openapi.models.shared.PortRangeFilter;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StringComparisonEnum;
import org.openapis.openapi.models.shared.StringFilter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateFindingsReportRequest req = new CreateFindingsReportRequest(                new CreateFindingsReportRequestBody(CreateFindingsReportRequestBodyReportFormatEnum.JSON,                 new CreateFindingsReportRequestBodyS3Destination() {{
                                                bucketName = "maiores";
                                                keyPrefix = "doloribus";
                                                kmsKeyArn = "iusto";
                                            }};) {{
                                filterCriteria = new CreateFindingsReportRequestBodyFilterCriteria() {{
                                    awsAccountId = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "tempora") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "alias";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "vel") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "ea";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "ex") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "magnam";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "maiores") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "dicta";
                                        }}),
                                    }};
                                    componentId = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "voluptatibus") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "nulla";
                                        }}),
                                    }};
                                    componentType = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "ea") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "quisquam";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "aliquid") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "corporis";
                                        }}),
                                    }};
                                    ec2InstanceImageId = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "consectetur") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "ea";
                                        }}),
                                    }};
                                    ec2InstanceSubnetId = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "a") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "minima";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "deleniti") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "aut";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "accusamus") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "aliquam";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "dolorum") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "non";
                                        }}),
                                    }};
                                    ec2InstanceVpcId = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "autem") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "velit";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "nulla") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "quas";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "tempora") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "libero";
                                        }}),
                                    }};
                                    ecrImageArchitecture = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "molestiae") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "provident";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "esse") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "odio";
                                        }}),
                                    }};
                                    ecrImageHash = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "quidem") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "fuga";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "suscipit") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "ut";
                                        }}),
                                    }};
                                    ecrImagePushedAt = new org.openapis.openapi.models.shared.DateFilter[]{{
                                        add(new DateFilter() {{
                                            endInclusive = OffsetDateTime.parse("2022-06-29T02:09:48.123Z");
                                            startInclusive = OffsetDateTime.parse("2022-09-28T10:00:45.702Z");
                                        }}),
                                        add(new DateFilter() {{
                                            endInclusive = OffsetDateTime.parse("2022-05-05T02:03:02.582Z");
                                            startInclusive = OffsetDateTime.parse("2022-08-03T04:27:44.236Z");
                                        }}),
                                        add(new DateFilter() {{
                                            endInclusive = OffsetDateTime.parse("2020-06-17T05:36:16.683Z");
                                            startInclusive = OffsetDateTime.parse("2020-12-15T21:52:54.784Z");
                                        }}),
                                        add(new DateFilter() {{
                                            endInclusive = OffsetDateTime.parse("2022-10-27T21:30:06.318Z");
                                            startInclusive = OffsetDateTime.parse("2022-12-06T12:02:05.098Z");
                                        }}),
                                    }};
                                    ecrImageRegistry = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "ipsam") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "tempora";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "esse") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "sequi";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "quod") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "aperiam";
                                        }}),
                                    }};
                                    ecrImageRepositoryName = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "accusamus") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "nihil";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "commodi") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "odio";
                                        }}),
                                    }};
                                    ecrImageTags = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "accusantium") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "deserunt";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "praesentium") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "eum";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "fuga") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "deleniti";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "explicabo") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "incidunt";
                                        }}),
                                    }};
                                    exploitAvailable = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "consequuntur") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "fugit";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "occaecati") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "explicabo";
                                        }}),
                                    }};
                                    findingArn = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "accusamus") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "esse";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "nam") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "esse";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "saepe") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "aliquid";
                                        }}),
                                    }};
                                    findingStatus = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "occaecati") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "molestiae";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "sit") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "distinctio";
                                        }}),
                                    }};
                                    findingType = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "consequuntur") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "adipisci";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "sapiente") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "minus";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "provident") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "esse";
                                        }}),
                                    }};
                                    firstObservedAt = new org.openapis.openapi.models.shared.DateFilter[]{{
                                        add(new DateFilter() {{
                                            endInclusive = OffsetDateTime.parse("2021-04-30T04:43:08.128Z");
                                            startInclusive = OffsetDateTime.parse("2022-11-26T10:10:26.600Z");
                                        }}),
                                        add(new DateFilter() {{
                                            endInclusive = OffsetDateTime.parse("2021-02-19T06:17:20.977Z");
                                            startInclusive = OffsetDateTime.parse("2021-04-10T23:50:37.359Z");
                                        }}),
                                        add(new DateFilter() {{
                                            endInclusive = OffsetDateTime.parse("2022-07-12T09:25:25.257Z");
                                            startInclusive = OffsetDateTime.parse("2020-01-10T06:57:07.831Z");
                                        }}),
                                        add(new DateFilter() {{
                                            endInclusive = OffsetDateTime.parse("2022-09-29T22:10:17.894Z");
                                            startInclusive = OffsetDateTime.parse("2022-11-27T12:32:54.264Z");
                                        }}),
                                    }};
                                    fixAvailable = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "quae") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "aliquid";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "eius") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "vel";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "accusantium") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "illum";
                                        }}),
                                    }};
                                    inspectorScore = new org.openapis.openapi.models.shared.NumberFilter[]{{
                                        add(new NumberFilter() {{
                                            lowerInclusive = 9589.83;
                                            upperInclusive = 1197.71;
                                        }}),
                                        add(new NumberFilter() {{
                                            lowerInclusive = 3553.69;
                                            upperInclusive = 4438.79;
                                        }}),
                                    }};
                                    lambdaFunctionExecutionRoleArn = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "qui") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "aut";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "itaque") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "ex";
                                        }}),
                                    }};
                                    lambdaFunctionLastModifiedAt = new org.openapis.openapi.models.shared.DateFilter[]{{
                                        add(new DateFilter() {{
                                            endInclusive = OffsetDateTime.parse("2022-05-23T15:36:15.509Z");
                                            startInclusive = OffsetDateTime.parse("2022-09-15T03:59:52.153Z");
                                        }}),
                                        add(new DateFilter() {{
                                            endInclusive = OffsetDateTime.parse("2022-09-22T05:30:53.483Z");
                                            startInclusive = OffsetDateTime.parse("2022-12-11T13:44:20.631Z");
                                        }}),
                                        add(new DateFilter() {{
                                            endInclusive = OffsetDateTime.parse("2022-11-30T09:58:30.487Z");
                                            startInclusive = OffsetDateTime.parse("2022-10-06T10:21:42.350Z");
                                        }}),
                                    }};
                                    lambdaFunctionLayers = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "aut") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "accusantium";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "ab") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "eum";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "dolor") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "non";
                                        }}),
                                    }};
                                    lambdaFunctionName = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "voluptas") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "impedit";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "maiores") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "dignissimos";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "voluptas") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "velit";
                                        }}),
                                    }};
                                    lambdaFunctionRuntime = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "consequuntur") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "ea";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "dignissimos") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "officia";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "quae") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "asperiores";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "labore") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "porro";
                                        }}),
                                    }};
                                    lastObservedAt = new org.openapis.openapi.models.shared.DateFilter[]{{
                                        add(new DateFilter() {{
                                            endInclusive = OffsetDateTime.parse("2022-04-26T11:54:02.741Z");
                                            startInclusive = OffsetDateTime.parse("2022-03-29T01:37:24.454Z");
                                        }}),
                                    }};
                                    networkProtocol = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "totam") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "est";
                                        }}),
                                    }};
                                    portRange = new org.openapis.openapi.models.shared.PortRangeFilter[]{{
                                        add(new PortRangeFilter() {{
                                            beginInclusive = 424089L;
                                            endInclusive = 497678L;
                                        }}),
                                        add(new PortRangeFilter() {{
                                            beginInclusive = 554688L;
                                            endInclusive = 427834L;
                                        }}),
                                        add(new PortRangeFilter() {{
                                            beginInclusive = 287051L;
                                            endInclusive = 822560L;
                                        }}),
                                        add(new PortRangeFilter() {{
                                            beginInclusive = 706575L;
                                            endInclusive = 738227L;
                                        }}),
                                    }};
                                    relatedVulnerabilities = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "assumenda") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "corporis";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "aperiam") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "recusandae";
                                        }}),
                                    }};
                                    resourceId = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "earum") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "in";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "suscipit") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "numquam";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "necessitatibus") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "quidem";
                                        }}),
                                    }};
                                    resourceTags = new org.openapis.openapi.models.shared.MapFilter[]{{
                                        add(new MapFilter(MapComparisonEnum.EQUALS, "adipisci") {{
                                            comparison = MapComparisonEnum.EQUALS;
                                            key = "sunt";
                                            value = "asperiores";
                                        }}),
                                        add(new MapFilter(MapComparisonEnum.EQUALS, "beatae") {{
                                            comparison = MapComparisonEnum.EQUALS;
                                            key = "non";
                                            value = "amet";
                                        }}),
                                    }};
                                    resourceType = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "corporis") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "debitis";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "voluptates") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "laboriosam";
                                        }}),
                                    }};
                                    severity = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "tempora") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "accusamus";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "voluptas") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "voluptas";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "adipisci") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "nobis";
                                        }}),
                                    }};
                                    title = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "dolore") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "blanditiis";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "ullam") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "officiis";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "quas") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "cum";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "corrupti") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "nesciunt";
                                        }}),
                                    }};
                                    updatedAt = new org.openapis.openapi.models.shared.DateFilter[]{{
                                        add(new DateFilter() {{
                                            endInclusive = OffsetDateTime.parse("2021-02-13T15:31:34.151Z");
                                            startInclusive = OffsetDateTime.parse("2022-04-01T23:17:58.998Z");
                                        }}),
                                        add(new DateFilter() {{
                                            endInclusive = OffsetDateTime.parse("2022-04-20T15:43:20.562Z");
                                            startInclusive = OffsetDateTime.parse("2022-01-12T16:37:17.721Z");
                                        }}),
                                        add(new DateFilter() {{
                                            endInclusive = OffsetDateTime.parse("2022-01-03T01:02:56.740Z");
                                            startInclusive = OffsetDateTime.parse("2022-02-05T04:05:02.351Z");
                                        }}),
                                        add(new DateFilter() {{
                                            endInclusive = OffsetDateTime.parse("2022-11-10T06:21:40.327Z");
                                            startInclusive = OffsetDateTime.parse("2022-06-01T06:14:54.164Z");
                                        }}),
                                    }};
                                    vendorSeverity = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "quidem") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "in";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "architecto") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "voluptas";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "illo") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "sapiente";
                                        }}),
                                    }};
                                    vulnerabilityId = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "incidunt") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "corrupti";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "necessitatibus") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "provident";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "quos") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "ea";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "voluptate") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "tempora";
                                        }}),
                                    }};
                                    vulnerabilitySource = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "officiis") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "sit";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "incidunt") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "facilis";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "sit") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "debitis";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "minima") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "error";
                                        }}),
                                    }};
                                    vulnerablePackages = new org.openapis.openapi.models.shared.PackageFilter[]{{
                                        add(new PackageFilter() {{
                                            architecture = new StringFilter(StringComparisonEnum.EQUALS, "aperiam") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "nulla";
                                            }};
                                            epoch = new NumberFilter() {{
                                                lowerInclusive = 9014.83;
                                                upperInclusive = 2536.42;
                                            }};
                                            name = new StringFilter(StringComparisonEnum.NOT_EQUALS, "beatae") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "in";
                                            }};
                                            release = new StringFilter(StringComparisonEnum.PREFIX, "cum") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "exercitationem";
                                            }};
                                            sourceLambdaLayerArn = new StringFilter(StringComparisonEnum.PREFIX, "error") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "dolorum";
                                            }};
                                            sourceLayerHash = new StringFilter(StringComparisonEnum.NOT_EQUALS, "neque") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "expedita";
                                            }};
                                            version = new StringFilter(StringComparisonEnum.PREFIX, "dolorum") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "nostrum";
                                            }};
                                        }}),
                                        add(new PackageFilter() {{
                                            architecture = new StringFilter(StringComparisonEnum.EQUALS, "atque") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "accusamus";
                                            }};
                                            epoch = new NumberFilter() {{
                                                lowerInclusive = 1482.68;
                                                upperInclusive = 2826.99;
                                            }};
                                            name = new StringFilter(StringComparisonEnum.PREFIX, "expedita") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "voluptatem";
                                            }};
                                            release = new StringFilter(StringComparisonEnum.PREFIX, "ipsam") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "consequatur";
                                            }};
                                            sourceLambdaLayerArn = new StringFilter(StringComparisonEnum.PREFIX, "repudiandae") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "voluptatum";
                                            }};
                                            sourceLayerHash = new StringFilter(StringComparisonEnum.PREFIX, "ex") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "et";
                                            }};
                                            version = new StringFilter(StringComparisonEnum.PREFIX, "nostrum") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "sit";
                                            }};
                                        }}),
                                        add(new PackageFilter() {{
                                            architecture = new StringFilter(StringComparisonEnum.EQUALS, "incidunt") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "error";
                                            }};
                                            epoch = new NumberFilter() {{
                                                lowerInclusive = 9688.65;
                                                upperInclusive = 2097.5;
                                            }};
                                            name = new StringFilter(StringComparisonEnum.EQUALS, "occaecati") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "dicta";
                                            }};
                                            release = new StringFilter(StringComparisonEnum.PREFIX, "laborum") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "quidem";
                                            }};
                                            sourceLambdaLayerArn = new StringFilter(StringComparisonEnum.PREFIX, "alias") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "tenetur";
                                            }};
                                            sourceLayerHash = new StringFilter(StringComparisonEnum.PREFIX, "unde") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "deserunt";
                                            }};
                                            version = new StringFilter(StringComparisonEnum.NOT_EQUALS, "delectus") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "provident";
                                            }};
                                        }}),
                                        add(new PackageFilter() {{
                                            architecture = new StringFilter(StringComparisonEnum.NOT_EQUALS, "quidem") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "perferendis";
                                            }};
                                            epoch = new NumberFilter() {{
                                                lowerInclusive = 4406.66;
                                                upperInclusive = 8136.79;
                                            }};
                                            name = new StringFilter(StringComparisonEnum.PREFIX, "veniam") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "praesentium";
                                            }};
                                            release = new StringFilter(StringComparisonEnum.NOT_EQUALS, "quasi") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "quisquam";
                                            }};
                                            sourceLambdaLayerArn = new StringFilter(StringComparisonEnum.NOT_EQUALS, "totam") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "reprehenderit";
                                            }};
                                            sourceLayerHash = new StringFilter(StringComparisonEnum.NOT_EQUALS, "et") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "quidem";
                                            }};
                                            version = new StringFilter(StringComparisonEnum.NOT_EQUALS, "ea") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "amet";
                                            }};
                                        }}),
                                    }};
                                }};;
                            }};) {{
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "error";
                xAmzCredential = "officiis";
                xAmzDate = "officiis";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "minima";
            }};            

            CreateFindingsReportResponse res = sdk.sdk.createFindingsReport(req);

            if (res.createFindingsReportResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFilter

Deletes a filter resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFilterRequest;
import org.openapis.openapi.models.operations.DeleteFilterRequestBody;
import org.openapis.openapi.models.operations.DeleteFilterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteFilterRequest req = new DeleteFilterRequest(                new DeleteFilterRequestBody("ex");) {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "at";
                xAmzDate = "error";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "repudiandae";
            }};            

            DeleteFilterResponse res = sdk.sdk.deleteFilter(req);

            if (res.deleteFilterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeOrganizationConfiguration

Describe Amazon Inspector configuration settings for an Amazon Web Services organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeOrganizationConfigurationRequest;
import org.openapis.openapi.models.operations.DescribeOrganizationConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeOrganizationConfigurationRequest req = new DescribeOrganizationConfigurationRequest() {{
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "sunt";
                xAmzCredential = "recusandae";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "repellendus";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "reiciendis";
            }};            

            DescribeOrganizationConfigurationResponse res = sdk.sdk.describeOrganizationConfiguration(req);

            if (res.describeOrganizationConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disable

Disables Amazon Inspector scans for one or more Amazon Web Services accounts. Disabling all scan types in an account disables the Amazon Inspector service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableRequest;
import org.openapis.openapi.models.operations.DisableRequestBody;
import org.openapis.openapi.models.operations.DisableResponse;
import org.openapis.openapi.models.shared.ResourceScanTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloremque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisableRequest req = new DisableRequest(                new DisableRequestBody() {{
                                accountIds = new String[]{{
                                    add("dicta"),
                                    add("accusantium"),
                                    add("beatae"),
                                    add("dolores"),
                                }};
                                resourceTypes = new org.openapis.openapi.models.shared.ResourceScanTypeEnum[]{{
                                    add(ResourceScanTypeEnum.ECR),
                                    add(ResourceScanTypeEnum.EC2),
                                }};
                            }};) {{
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "molestias";
                xAmzCredential = "magnam";
                xAmzDate = "saepe";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "officiis";
            }};            

            DisableResponse res = sdk.sdk.disable(req);

            if (res.disableResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disableDelegatedAdminAccount

Disables the Amazon Inspector delegated administrator for your organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableDelegatedAdminAccountRequest;
import org.openapis.openapi.models.operations.DisableDelegatedAdminAccountRequestBody;
import org.openapis.openapi.models.operations.DisableDelegatedAdminAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perspiciatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisableDelegatedAdminAccountRequest req = new DisableDelegatedAdminAccountRequest(                new DisableDelegatedAdminAccountRequestBody("in");) {{
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "eveniet";
                xAmzCredential = "occaecati";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "id";
                xAmzSignedHeaders = "quis";
            }};            

            DisableDelegatedAdminAccountResponse res = sdk.sdk.disableDelegatedAdminAccount(req);

            if (res.disableDelegatedAdminAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateMember

Disassociates a member account from an Amazon Inspector delegated administrator.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateMemberRequest;
import org.openapis.openapi.models.operations.DisassociateMemberRequestBody;
import org.openapis.openapi.models.operations.DisassociateMemberResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateMemberRequest req = new DisassociateMemberRequest(                new DisassociateMemberRequestBody("error");) {{
                xAmzAlgorithm = "illo";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "quidem";
                xAmzDate = "eveniet";
                xAmzSecurityToken = "non";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "doloremque";
            }};            

            DisassociateMemberResponse res = sdk.sdk.disassociateMember(req);

            if (res.disassociateMemberResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enable

Enables Amazon Inspector scans for one or more Amazon Web Services accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableRequest;
import org.openapis.openapi.models.operations.EnableRequestBody;
import org.openapis.openapi.models.operations.EnableResponse;
import org.openapis.openapi.models.shared.ResourceScanTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            EnableRequest req = new EnableRequest(                new EnableRequestBody(                new org.openapis.openapi.models.shared.ResourceScanTypeEnum[]{{
                                                add(ResourceScanTypeEnum.ECR),
                                            }}) {{
                                accountIds = new String[]{{
                                    add("molestiae"),
                                }};
                                clientToken = "eveniet";
                            }};) {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "cum";
                xAmzCredential = "iure";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "ratione";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "distinctio";
            }};            

            EnableResponse res = sdk.sdk.enable(req);

            if (res.enableResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enableDelegatedAdminAccount

Enables the Amazon Inspector delegated administrator for your Organizations organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableDelegatedAdminAccountRequest;
import org.openapis.openapi.models.operations.EnableDelegatedAdminAccountRequestBody;
import org.openapis.openapi.models.operations.EnableDelegatedAdminAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            EnableDelegatedAdminAccountRequest req = new EnableDelegatedAdminAccountRequest(                new EnableDelegatedAdminAccountRequestBody("rem") {{
                                clientToken = "aliquam";
                            }};) {{
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "repellat";
                xAmzCredential = "alias";
                xAmzDate = "corporis";
                xAmzSecurityToken = "perspiciatis";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "mollitia";
            }};            

            EnableDelegatedAdminAccountResponse res = sdk.sdk.enableDelegatedAdminAccount(req);

            if (res.enableDelegatedAdminAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConfiguration

Retrieves setting configurations for Inspector scans.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConfigurationRequest;
import org.openapis.openapi.models.operations.GetConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetConfigurationRequest req = new GetConfigurationRequest() {{
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "reiciendis";
                xAmzDate = "dolores";
                xAmzSecurityToken = "id";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "dolore";
            }};            

            GetConfigurationResponse res = sdk.sdk.getConfiguration(req);

            if (res.getConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDelegatedAdminAccount

Retrieves information about the Amazon Inspector delegated administrator for your organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDelegatedAdminAccountRequest;
import org.openapis.openapi.models.operations.GetDelegatedAdminAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDelegatedAdminAccountRequest req = new GetDelegatedAdminAccountRequest() {{
                xAmzAlgorithm = "nesciunt";
                xAmzContentSha256 = "quae";
                xAmzCredential = "recusandae";
                xAmzDate = "omnis";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "ex";
            }};            

            GetDelegatedAdminAccountResponse res = sdk.sdk.getDelegatedAdminAccount(req);

            if (res.getDelegatedAdminAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFindingsReportStatus

Gets the status of a findings report.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFindingsReportStatusRequest;
import org.openapis.openapi.models.operations.GetFindingsReportStatusRequestBody;
import org.openapis.openapi.models.operations.GetFindingsReportStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFindingsReportStatusRequest req = new GetFindingsReportStatusRequest(                new GetFindingsReportStatusRequestBody() {{
                                reportId = "culpa";
                            }};) {{
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "laudantium";
                xAmzDate = "eum";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "esse";
            }};            

            GetFindingsReportStatusResponse res = sdk.sdk.getFindingsReportStatus(req);

            if (res.getFindingsReportStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMember

Gets member information for your organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMemberRequest;
import org.openapis.openapi.models.operations.GetMemberRequestBody;
import org.openapis.openapi.models.operations.GetMemberResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMemberRequest req = new GetMemberRequest(                new GetMemberRequestBody("quis");) {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "provident";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "animi";
            }};            

            GetMemberResponse res = sdk.sdk.getMember(req);

            if (res.getMemberResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAccountPermissions

Lists the permissions an account has to configure Amazon Inspector.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAccountPermissionsRequest;
import org.openapis.openapi.models.operations.ListAccountPermissionsRequestBody;
import org.openapis.openapi.models.operations.ListAccountPermissionsRequestBodyServiceEnum;
import org.openapis.openapi.models.operations.ListAccountPermissionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nostrum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAccountPermissionsRequest req = new ListAccountPermissionsRequest(                new ListAccountPermissionsRequestBody() {{
                                maxResults = 652309L;
                                nextToken = "provident";
                                service = ListAccountPermissionsRequestBodyServiceEnum.LAMBDA;
                            }};) {{
                xAmzAlgorithm = "animi";
                xAmzContentSha256 = "ex";
                xAmzCredential = "aliquid";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "repellat";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "ullam";
                maxResults = "in";
                nextToken = "nam";
            }};            

            ListAccountPermissionsResponse res = sdk.sdk.listAccountPermissions(req);

            if (res.listAccountPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCoverage

Lists coverage details for you environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCoverageRequest;
import org.openapis.openapi.models.operations.ListCoverageRequestBody;
import org.openapis.openapi.models.operations.ListCoverageRequestBodyFilterCriteria;
import org.openapis.openapi.models.operations.ListCoverageResponse;
import org.openapis.openapi.models.shared.CoverageMapComparisonEnum;
import org.openapis.openapi.models.shared.CoverageMapFilter;
import org.openapis.openapi.models.shared.CoverageStringComparisonEnum;
import org.openapis.openapi.models.shared.CoverageStringFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCoverageRequest req = new ListCoverageRequest(                new ListCoverageRequestBody() {{
                                filterCriteria = new ListCoverageRequestBodyFilterCriteria() {{
                                    accountId = new org.openapis.openapi.models.shared.CoverageStringFilter[]{{
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.EQUALS, "voluptatibus") {{
                                            comparison = CoverageStringComparisonEnum.NOT_EQUALS;
                                            value = "placeat";
                                        }}),
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.NOT_EQUALS, "cumque") {{
                                            comparison = CoverageStringComparisonEnum.NOT_EQUALS;
                                            value = "officiis";
                                        }}),
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.EQUALS, "quis") {{
                                            comparison = CoverageStringComparisonEnum.EQUALS;
                                            value = "rerum";
                                        }}),
                                    }};
                                    ec2InstanceTags = new org.openapis.openapi.models.shared.CoverageMapFilter[]{{
                                        add(new CoverageMapFilter(CoverageMapComparisonEnum.EQUALS, "quae") {{
                                            comparison = CoverageMapComparisonEnum.EQUALS;
                                            key = "fugit";
                                            value = "cumque";
                                        }}),
                                    }};
                                    ecrImageTags = new org.openapis.openapi.models.shared.CoverageStringFilter[]{{
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.EQUALS, "eius") {{
                                            comparison = CoverageStringComparisonEnum.EQUALS;
                                            value = "aspernatur";
                                        }}),
                                    }};
                                    ecrRepositoryName = new org.openapis.openapi.models.shared.CoverageStringFilter[]{{
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.EQUALS, "sapiente") {{
                                            comparison = CoverageStringComparisonEnum.NOT_EQUALS;
                                            value = "impedit";
                                        }}),
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.EQUALS, "beatae") {{
                                            comparison = CoverageStringComparisonEnum.EQUALS;
                                            value = "dicta";
                                        }}),
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.NOT_EQUALS, "soluta") {{
                                            comparison = CoverageStringComparisonEnum.NOT_EQUALS;
                                            value = "provident";
                                        }}),
                                    }};
                                    lambdaFunctionName = new org.openapis.openapi.models.shared.CoverageStringFilter[]{{
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.NOT_EQUALS, "perspiciatis") {{
                                            comparison = CoverageStringComparisonEnum.NOT_EQUALS;
                                            value = "eaque";
                                        }}),
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.EQUALS, "porro") {{
                                            comparison = CoverageStringComparisonEnum.NOT_EQUALS;
                                            value = "debitis";
                                        }}),
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.EQUALS, "cumque") {{
                                            comparison = CoverageStringComparisonEnum.EQUALS;
                                            value = "dolorem";
                                        }}),
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.NOT_EQUALS, "necessitatibus") {{
                                            comparison = CoverageStringComparisonEnum.NOT_EQUALS;
                                            value = "ratione";
                                        }}),
                                    }};
                                    lambdaFunctionRuntime = new org.openapis.openapi.models.shared.CoverageStringFilter[]{{
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.EQUALS, "ducimus") {{
                                            comparison = CoverageStringComparisonEnum.EQUALS;
                                            value = "quasi";
                                        }}),
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.EQUALS, "adipisci") {{
                                            comparison = CoverageStringComparisonEnum.NOT_EQUALS;
                                            value = "occaecati";
                                        }}),
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.NOT_EQUALS, "nulla") {{
                                            comparison = CoverageStringComparisonEnum.EQUALS;
                                            value = "magni";
                                        }}),
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.EQUALS, "nihil") {{
                                            comparison = CoverageStringComparisonEnum.NOT_EQUALS;
                                            value = "ipsa";
                                        }}),
                                    }};
                                    lambdaFunctionTags = new org.openapis.openapi.models.shared.CoverageMapFilter[]{{
                                        add(new CoverageMapFilter(CoverageMapComparisonEnum.EQUALS, "esse") {{
                                            comparison = CoverageMapComparisonEnum.EQUALS;
                                            key = "dicta";
                                            value = "iusto";
                                        }}),
                                        add(new CoverageMapFilter(CoverageMapComparisonEnum.EQUALS, "reiciendis") {{
                                            comparison = CoverageMapComparisonEnum.EQUALS;
                                            key = "praesentium";
                                            value = "maiores";
                                        }}),
                                    }};
                                    resourceId = new org.openapis.openapi.models.shared.CoverageStringFilter[]{{
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.EQUALS, "dicta") {{
                                            comparison = CoverageStringComparisonEnum.EQUALS;
                                            value = "fugiat";
                                        }}),
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.EQUALS, "ex") {{
                                            comparison = CoverageStringComparisonEnum.EQUALS;
                                            value = "tempora";
                                        }}),
                                    }};
                                    resourceType = new org.openapis.openapi.models.shared.CoverageStringFilter[]{{
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.NOT_EQUALS, "sunt") {{
                                            comparison = CoverageStringComparisonEnum.EQUALS;
                                            value = "ipsa";
                                        }}),
                                    }};
                                    scanStatusCode = new org.openapis.openapi.models.shared.CoverageStringFilter[]{{
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.EQUALS, "officia") {{
                                            comparison = CoverageStringComparisonEnum.NOT_EQUALS;
                                            value = "expedita";
                                        }}),
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.EQUALS, "eum") {{
                                            comparison = CoverageStringComparisonEnum.EQUALS;
                                            value = "aliquid";
                                        }}),
                                    }};
                                    scanStatusReason = new org.openapis.openapi.models.shared.CoverageStringFilter[]{{
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.EQUALS, "error") {{
                                            comparison = CoverageStringComparisonEnum.NOT_EQUALS;
                                            value = "id";
                                        }}),
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.NOT_EQUALS, "laborum") {{
                                            comparison = CoverageStringComparisonEnum.NOT_EQUALS;
                                            value = "voluptates";
                                        }}),
                                    }};
                                    scanType = new org.openapis.openapi.models.shared.CoverageStringFilter[]{{
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.EQUALS, "vitae") {{
                                            comparison = CoverageStringComparisonEnum.EQUALS;
                                            value = "deleniti";
                                        }}),
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.NOT_EQUALS, "ex") {{
                                            comparison = CoverageStringComparisonEnum.NOT_EQUALS;
                                            value = "ex";
                                        }}),
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.NOT_EQUALS, "voluptatem") {{
                                            comparison = CoverageStringComparisonEnum.EQUALS;
                                            value = "ad";
                                        }}),
                                    }};
                                }};;
                                maxResults = 561577L;
                                nextToken = "cum";
                            }};) {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "beatae";
                xAmzCredential = "voluptatum";
                xAmzDate = "omnis";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "rerum";
                xAmzSignedHeaders = "est";
                maxResults = "culpa";
                nextToken = "voluptatem";
            }};            

            ListCoverageResponse res = sdk.sdk.listCoverage(req);

            if (res.listCoverageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCoverageStatistics

Lists Amazon Inspector coverage statistics for your environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCoverageStatisticsRequest;
import org.openapis.openapi.models.operations.ListCoverageStatisticsRequestBody;
import org.openapis.openapi.models.operations.ListCoverageStatisticsRequestBodyFilterCriteria;
import org.openapis.openapi.models.operations.ListCoverageStatisticsRequestBodyGroupByEnum;
import org.openapis.openapi.models.operations.ListCoverageStatisticsResponse;
import org.openapis.openapi.models.shared.CoverageMapComparisonEnum;
import org.openapis.openapi.models.shared.CoverageMapFilter;
import org.openapis.openapi.models.shared.CoverageStringComparisonEnum;
import org.openapis.openapi.models.shared.CoverageStringFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCoverageStatisticsRequest req = new ListCoverageStatisticsRequest(                new ListCoverageStatisticsRequestBody() {{
                                filterCriteria = new ListCoverageStatisticsRequestBodyFilterCriteria() {{
                                    accountId = new org.openapis.openapi.models.shared.CoverageStringFilter[]{{
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.NOT_EQUALS, "debitis") {{
                                            comparison = CoverageStringComparisonEnum.EQUALS;
                                            value = "fuga";
                                        }}),
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.NOT_EQUALS, "earum") {{
                                            comparison = CoverageStringComparisonEnum.EQUALS;
                                            value = "alias";
                                        }}),
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.NOT_EQUALS, "minus") {{
                                            comparison = CoverageStringComparisonEnum.EQUALS;
                                            value = "sapiente";
                                        }}),
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.EQUALS, "ullam") {{
                                            comparison = CoverageStringComparisonEnum.EQUALS;
                                            value = "asperiores";
                                        }}),
                                    }};
                                    ec2InstanceTags = new org.openapis.openapi.models.shared.CoverageMapFilter[]{{
                                        add(new CoverageMapFilter(CoverageMapComparisonEnum.EQUALS, "impedit") {{
                                            comparison = CoverageMapComparisonEnum.EQUALS;
                                            key = "illum";
                                            value = "totam";
                                        }}),
                                    }};
                                    ecrImageTags = new org.openapis.openapi.models.shared.CoverageStringFilter[]{{
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.NOT_EQUALS, "dolor") {{
                                            comparison = CoverageStringComparisonEnum.NOT_EQUALS;
                                            value = "ipsam";
                                        }}),
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.NOT_EQUALS, "veritatis") {{
                                            comparison = CoverageStringComparisonEnum.EQUALS;
                                            value = "inventore";
                                        }}),
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.EQUALS, "architecto") {{
                                            comparison = CoverageStringComparisonEnum.EQUALS;
                                            value = "dolor";
                                        }}),
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.EQUALS, "ab") {{
                                            comparison = CoverageStringComparisonEnum.EQUALS;
                                            value = "modi";
                                        }}),
                                    }};
                                    ecrRepositoryName = new org.openapis.openapi.models.shared.CoverageStringFilter[]{{
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.NOT_EQUALS, "ipsam") {{
                                            comparison = CoverageStringComparisonEnum.EQUALS;
                                            value = "dolor";
                                        }}),
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.NOT_EQUALS, "eveniet") {{
                                            comparison = CoverageStringComparisonEnum.EQUALS;
                                            value = "ipsa";
                                        }}),
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.EQUALS, "necessitatibus") {{
                                            comparison = CoverageStringComparisonEnum.NOT_EQUALS;
                                            value = "officiis";
                                        }}),
                                    }};
                                    lambdaFunctionName = new org.openapis.openapi.models.shared.CoverageStringFilter[]{{
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.NOT_EQUALS, "eum") {{
                                            comparison = CoverageStringComparisonEnum.EQUALS;
                                            value = "nesciunt";
                                        }}),
                                    }};
                                    lambdaFunctionRuntime = new org.openapis.openapi.models.shared.CoverageStringFilter[]{{
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.EQUALS, "ab") {{
                                            comparison = CoverageStringComparisonEnum.NOT_EQUALS;
                                            value = "magnam";
                                        }}),
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.NOT_EQUALS, "laboriosam") {{
                                            comparison = CoverageStringComparisonEnum.NOT_EQUALS;
                                            value = "autem";
                                        }}),
                                    }};
                                    lambdaFunctionTags = new org.openapis.openapi.models.shared.CoverageMapFilter[]{{
                                        add(new CoverageMapFilter(CoverageMapComparisonEnum.EQUALS, "exercitationem") {{
                                            comparison = CoverageMapComparisonEnum.EQUALS;
                                            key = "consequuntur";
                                            value = "voluptatem";
                                        }}),
                                        add(new CoverageMapFilter(CoverageMapComparisonEnum.EQUALS, "nisi") {{
                                            comparison = CoverageMapComparisonEnum.EQUALS;
                                            key = "necessitatibus";
                                            value = "quasi";
                                        }}),
                                        add(new CoverageMapFilter(CoverageMapComparisonEnum.EQUALS, "est") {{
                                            comparison = CoverageMapComparisonEnum.EQUALS;
                                            key = "at";
                                            value = "vero";
                                        }}),
                                        add(new CoverageMapFilter(CoverageMapComparisonEnum.EQUALS, "doloribus") {{
                                            comparison = CoverageMapComparisonEnum.EQUALS;
                                            key = "harum";
                                            value = "sequi";
                                        }}),
                                    }};
                                    resourceId = new org.openapis.openapi.models.shared.CoverageStringFilter[]{{
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.EQUALS, "voluptate") {{
                                            comparison = CoverageStringComparisonEnum.NOT_EQUALS;
                                            value = "occaecati";
                                        }}),
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.EQUALS, "numquam") {{
                                            comparison = CoverageStringComparisonEnum.NOT_EQUALS;
                                            value = "officia";
                                        }}),
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.EQUALS, "aspernatur") {{
                                            comparison = CoverageStringComparisonEnum.EQUALS;
                                            value = "quos";
                                        }}),
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.NOT_EQUALS, "laudantium") {{
                                            comparison = CoverageStringComparisonEnum.EQUALS;
                                            value = "nesciunt";
                                        }}),
                                    }};
                                    resourceType = new org.openapis.openapi.models.shared.CoverageStringFilter[]{{
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.NOT_EQUALS, "dicta") {{
                                            comparison = CoverageStringComparisonEnum.EQUALS;
                                            value = "rem";
                                        }}),
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.EQUALS, "aperiam") {{
                                            comparison = CoverageStringComparisonEnum.EQUALS;
                                            value = "consequuntur";
                                        }}),
                                    }};
                                    scanStatusCode = new org.openapis.openapi.models.shared.CoverageStringFilter[]{{
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.EQUALS, "omnis") {{
                                            comparison = CoverageStringComparisonEnum.NOT_EQUALS;
                                            value = "soluta";
                                        }}),
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.NOT_EQUALS, "magni") {{
                                            comparison = CoverageStringComparisonEnum.EQUALS;
                                            value = "occaecati";
                                        }}),
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.NOT_EQUALS, "voluptatibus") {{
                                            comparison = CoverageStringComparisonEnum.EQUALS;
                                            value = "fuga";
                                        }}),
                                    }};
                                    scanStatusReason = new org.openapis.openapi.models.shared.CoverageStringFilter[]{{
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.EQUALS, "praesentium") {{
                                            comparison = CoverageStringComparisonEnum.NOT_EQUALS;
                                            value = "delectus";
                                        }}),
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.NOT_EQUALS, "quos") {{
                                            comparison = CoverageStringComparisonEnum.NOT_EQUALS;
                                            value = "magnam";
                                        }}),
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.EQUALS, "totam") {{
                                            comparison = CoverageStringComparisonEnum.EQUALS;
                                            value = "itaque";
                                        }}),
                                    }};
                                    scanType = new org.openapis.openapi.models.shared.CoverageStringFilter[]{{
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.NOT_EQUALS, "voluptatem") {{
                                            comparison = CoverageStringComparisonEnum.EQUALS;
                                            value = "nam";
                                        }}),
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.EQUALS, "quasi") {{
                                            comparison = CoverageStringComparisonEnum.EQUALS;
                                            value = "vel";
                                        }}),
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.EQUALS, "sint") {{
                                            comparison = CoverageStringComparisonEnum.EQUALS;
                                            value = "maiores";
                                        }}),
                                        add(new CoverageStringFilter(CoverageStringComparisonEnum.EQUALS, "nemo") {{
                                            comparison = CoverageStringComparisonEnum.NOT_EQUALS;
                                            value = "deserunt";
                                        }}),
                                    }};
                                }};;
                                groupBy = ListCoverageStatisticsRequestBodyGroupByEnum.ACCOUNT_ID;
                                nextToken = "est";
                            }};) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "sint";
                xAmzCredential = "accusamus";
                xAmzDate = "impedit";
                xAmzSecurityToken = "hic";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "asperiores";
                nextToken = "ex";
            }};            

            ListCoverageStatisticsResponse res = sdk.sdk.listCoverageStatistics(req);

            if (res.listCoverageStatisticsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDelegatedAdminAccounts

Lists information about the Amazon Inspector delegated administrator of your organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDelegatedAdminAccountsRequest;
import org.openapis.openapi.models.operations.ListDelegatedAdminAccountsRequestBody;
import org.openapis.openapi.models.operations.ListDelegatedAdminAccountsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDelegatedAdminAccountsRequest req = new ListDelegatedAdminAccountsRequest(                new ListDelegatedAdminAccountsRequestBody() {{
                                maxResults = 895346L;
                                nextToken = "delectus";
                            }};) {{
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "minus";
                xAmzCredential = "fuga";
                xAmzDate = "laborum";
                xAmzSecurityToken = "consectetur";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "atque";
                maxResults = "ipsum";
                nextToken = "impedit";
            }};            

            ListDelegatedAdminAccountsResponse res = sdk.sdk.listDelegatedAdminAccounts(req);

            if (res.listDelegatedAdminAccountsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFilters

Lists the filters associated with your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFiltersRequest;
import org.openapis.openapi.models.operations.ListFiltersRequestBody;
import org.openapis.openapi.models.operations.ListFiltersRequestBodyActionEnum;
import org.openapis.openapi.models.operations.ListFiltersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFiltersRequest req = new ListFiltersRequest(                new ListFiltersRequestBody() {{
                                action = ListFiltersRequestBodyActionEnum.SUPPRESS;
                                arns = new String[]{{
                                    add("nam"),
                                    add("dolore"),
                                    add("iusto"),
                                    add("voluptate"),
                                }};
                                maxResults = 194023L;
                                nextToken = "dignissimos";
                            }};) {{
                xAmzAlgorithm = "neque";
                xAmzContentSha256 = "quo";
                xAmzCredential = "deleniti";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "iure";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "voluptatibus";
                maxResults = "vel";
                nextToken = "magnam";
            }};            

            ListFiltersResponse res = sdk.sdk.listFilters(req);

            if (res.listFiltersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFindingAggregations

Lists aggregated finding data for your environment based on specific criteria.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFindingAggregationsRequest;
import org.openapis.openapi.models.operations.ListFindingAggregationsRequestBody;
import org.openapis.openapi.models.operations.ListFindingAggregationsRequestBodyAggregationRequest;
import org.openapis.openapi.models.operations.ListFindingAggregationsRequestBodyAggregationTypeEnum;
import org.openapis.openapi.models.operations.ListFindingAggregationsResponse;
import org.openapis.openapi.models.shared.AccountAggregation;
import org.openapis.openapi.models.shared.AccountSortByEnum;
import org.openapis.openapi.models.shared.AggregationFindingTypeEnum;
import org.openapis.openapi.models.shared.AggregationResourceTypeEnum;
import org.openapis.openapi.models.shared.AmiAggregation;
import org.openapis.openapi.models.shared.AmiSortByEnum;
import org.openapis.openapi.models.shared.AwsEcrContainerAggregation;
import org.openapis.openapi.models.shared.AwsEcrContainerSortByEnum;
import org.openapis.openapi.models.shared.Ec2InstanceAggregation;
import org.openapis.openapi.models.shared.Ec2InstanceSortByEnum;
import org.openapis.openapi.models.shared.FindingTypeAggregation;
import org.openapis.openapi.models.shared.FindingTypeSortByEnum;
import org.openapis.openapi.models.shared.ImageLayerAggregation;
import org.openapis.openapi.models.shared.ImageLayerSortByEnum;
import org.openapis.openapi.models.shared.LambdaFunctionAggregation;
import org.openapis.openapi.models.shared.LambdaFunctionSortByEnum;
import org.openapis.openapi.models.shared.LambdaLayerAggregation;
import org.openapis.openapi.models.shared.LambdaLayerSortByEnum;
import org.openapis.openapi.models.shared.MapComparisonEnum;
import org.openapis.openapi.models.shared.MapFilter;
import org.openapis.openapi.models.shared.PackageAggregation;
import org.openapis.openapi.models.shared.PackageSortByEnum;
import org.openapis.openapi.models.shared.RepositoryAggregation;
import org.openapis.openapi.models.shared.RepositorySortByEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortOrderEnum;
import org.openapis.openapi.models.shared.StringComparisonEnum;
import org.openapis.openapi.models.shared.StringFilter;
import org.openapis.openapi.models.shared.TitleAggregation;
import org.openapis.openapi.models.shared.TitleSortByEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFindingAggregationsRequest req = new ListFindingAggregationsRequest(                new ListFindingAggregationsRequestBody(ListFindingAggregationsRequestBodyAggregationTypeEnum.FINDING_TYPE) {{
                                accountIds = new org.openapis.openapi.models.shared.StringFilter[]{{
                                    add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "quia") {{
                                        comparison = StringComparisonEnum.NOT_EQUALS;
                                        value = "architecto";
                                    }}),
                                    add(new StringFilter(StringComparisonEnum.EQUALS, "illo") {{
                                        comparison = StringComparisonEnum.NOT_EQUALS;
                                        value = "aliquam";
                                    }}),
                                    add(new StringFilter(StringComparisonEnum.PREFIX, "beatae") {{
                                        comparison = StringComparisonEnum.EQUALS;
                                        value = "vel";
                                    }}),
                                    add(new StringFilter(StringComparisonEnum.PREFIX, "velit") {{
                                        comparison = StringComparisonEnum.NOT_EQUALS;
                                        value = "excepturi";
                                    }}),
                                }};
                                aggregationRequest = new ListFindingAggregationsRequestBodyAggregationRequest() {{
                                    accountAggregation = new AccountAggregation() {{
                                        findingType = AggregationFindingTypeEnum.NETWORK_REACHABILITY;
                                        resourceType = AggregationResourceTypeEnum.AWS_ECR_CONTAINER_IMAGE;
                                        sortBy = AccountSortByEnum.ALL;
                                        sortOrder = SortOrderEnum.ASC;
                                    }};;
                                    amiAggregation = new AmiAggregation() {{
                                        amis = new org.openapis.openapi.models.shared.StringFilter[]{{
                                            add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "alias") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "iste";
                                            }}),
                                            add(new StringFilter(StringComparisonEnum.EQUALS, "laborum") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "itaque";
                                            }}),
                                            add(new StringFilter(StringComparisonEnum.PREFIX, "sit") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "dolor";
                                            }}),
                                            add(new StringFilter(StringComparisonEnum.PREFIX, "recusandae") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "consequatur";
                                            }}),
                                        }};
                                        sortBy = AmiSortByEnum.HIGH;
                                        sortOrder = SortOrderEnum.DESC;
                                    }};;
                                    awsEcrContainerAggregation = new AwsEcrContainerAggregation() {{
                                        architectures = new org.openapis.openapi.models.shared.StringFilter[]{{
                                            add(new StringFilter(StringComparisonEnum.PREFIX, "expedita") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "placeat";
                                            }}),
                                            add(new StringFilter(StringComparisonEnum.PREFIX, "ullam") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "a";
                                            }}),
                                        }};
                                        imageShas = new org.openapis.openapi.models.shared.StringFilter[]{{
                                            add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "ipsam") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "animi";
                                            }}),
                                            add(new StringFilter(StringComparisonEnum.PREFIX, "esse") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "est";
                                            }}),
                                            add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "consectetur") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "veritatis";
                                            }}),
                                        }};
                                        imageTags = new org.openapis.openapi.models.shared.StringFilter[]{{
                                            add(new StringFilter(StringComparisonEnum.EQUALS, "qui") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "dolorem";
                                            }}),
                                        }};
                                        repositories = new org.openapis.openapi.models.shared.StringFilter[]{{
                                            add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "libero") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "nemo";
                                            }}),
                                            add(new StringFilter(StringComparisonEnum.PREFIX, "fugit") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "dolorum";
                                            }}),
                                            add(new StringFilter(StringComparisonEnum.PREFIX, "quae") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "magni";
                                            }}),
                                        }};
                                        resourceIds = new org.openapis.openapi.models.shared.StringFilter[]{{
                                            add(new StringFilter(StringComparisonEnum.PREFIX, "itaque") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "neque";
                                            }}),
                                        }};
                                        sortBy = AwsEcrContainerSortByEnum.CRITICAL;
                                        sortOrder = SortOrderEnum.ASC;
                                    }};;
                                    ec2InstanceAggregation = new Ec2InstanceAggregation() {{
                                        amis = new org.openapis.openapi.models.shared.StringFilter[]{{
                                            add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "quia") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "distinctio";
                                            }}),
                                            add(new StringFilter(StringComparisonEnum.PREFIX, "libero") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "nostrum";
                                            }}),
                                            add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "fugiat") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "id";
                                            }}),
                                        }};
                                        instanceIds = new org.openapis.openapi.models.shared.StringFilter[]{{
                                            add(new StringFilter(StringComparisonEnum.EQUALS, "iusto") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "placeat";
                                            }}),
                                            add(new StringFilter(StringComparisonEnum.EQUALS, "aperiam") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "voluptates";
                                            }}),
                                            add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "distinctio") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "dolore";
                                            }}),
                                        }};
                                        instanceTags = new org.openapis.openapi.models.shared.MapFilter[]{{
                                            add(new MapFilter(MapComparisonEnum.EQUALS, "dolores") {{
                                                comparison = MapComparisonEnum.EQUALS;
                                                key = "autem";
                                                value = "esse";
                                            }}),
                                        }};
                                        operatingSystems = new org.openapis.openapi.models.shared.StringFilter[]{{
                                            add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "corrupti") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "est";
                                            }}),
                                            add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "necessitatibus") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "provident";
                                            }}),
                                            add(new StringFilter(StringComparisonEnum.PREFIX, "autem") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "sint";
                                            }}),
                                            add(new StringFilter(StringComparisonEnum.PREFIX, "corporis") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "rerum";
                                            }}),
                                        }};
                                        sortBy = Ec2InstanceSortByEnum.ALL;
                                        sortOrder = SortOrderEnum.DESC;
                                    }};;
                                    findingTypeAggregation = new FindingTypeAggregation() {{
                                        findingType = AggregationFindingTypeEnum.PACKAGE_VULNERABILITY;
                                        resourceType = AggregationResourceTypeEnum.AWS_LAMBDA_FUNCTION;
                                        sortBy = FindingTypeSortByEnum.CRITICAL;
                                        sortOrder = SortOrderEnum.ASC;
                                    }};;
                                    imageLayerAggregation = new ImageLayerAggregation() {{
                                        layerHashes = new org.openapis.openapi.models.shared.StringFilter[]{{
                                            add(new StringFilter(StringComparisonEnum.EQUALS, "expedita") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "repudiandae";
                                            }}),
                                            add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "odio") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "eos";
                                            }}),
                                            add(new StringFilter(StringComparisonEnum.EQUALS, "corporis") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "odit";
                                            }}),
                                        }};
                                        repositories = new org.openapis.openapi.models.shared.StringFilter[]{{
                                            add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "similique") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "adipisci";
                                            }}),
                                            add(new StringFilter(StringComparisonEnum.PREFIX, "beatae") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "quidem";
                                            }}),
                                            add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "cupiditate") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "molestiae";
                                            }}),
                                        }};
                                        resourceIds = new org.openapis.openapi.models.shared.StringFilter[]{{
                                            add(new StringFilter(StringComparisonEnum.EQUALS, "at") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "numquam";
                                            }}),
                                        }};
                                        sortBy = ImageLayerSortByEnum.HIGH;
                                        sortOrder = SortOrderEnum.ASC;
                                    }};;
                                    lambdaFunctionAggregation = new LambdaFunctionAggregation() {{
                                        functionNames = new org.openapis.openapi.models.shared.StringFilter[]{{
                                            add(new StringFilter(StringComparisonEnum.EQUALS, "expedita") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "corporis";
                                            }}),
                                            add(new StringFilter(StringComparisonEnum.EQUALS, "placeat") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "cupiditate";
                                            }}),
                                            add(new StringFilter(StringComparisonEnum.PREFIX, "minus") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "neque";
                                            }}),
                                            add(new StringFilter(StringComparisonEnum.PREFIX, "magnam") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "modi";
                                            }}),
                                        }};
                                        functionTags = new org.openapis.openapi.models.shared.MapFilter[]{{
                                            add(new MapFilter(MapComparisonEnum.EQUALS, "aperiam") {{
                                                comparison = MapComparisonEnum.EQUALS;
                                                key = "maiores";
                                                value = "tempore";
                                            }}),
                                            add(new MapFilter(MapComparisonEnum.EQUALS, "labore") {{
                                                comparison = MapComparisonEnum.EQUALS;
                                                key = "libero";
                                                value = "ratione";
                                            }}),
                                            add(new MapFilter(MapComparisonEnum.EQUALS, "voluptas") {{
                                                comparison = MapComparisonEnum.EQUALS;
                                                key = "totam";
                                                value = "occaecati";
                                            }}),
                                            add(new MapFilter(MapComparisonEnum.EQUALS, "minus") {{
                                                comparison = MapComparisonEnum.EQUALS;
                                                key = "quo";
                                                value = "velit";
                                            }}),
                                        }};
                                        resourceIds = new org.openapis.openapi.models.shared.StringFilter[]{{
                                            add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "delectus") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "est";
                                            }}),
                                            add(new StringFilter(StringComparisonEnum.EQUALS, "repellat") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "vero";
                                            }}),
                                            add(new StringFilter(StringComparisonEnum.PREFIX, "aperiam") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "nemo";
                                            }}),
                                        }};
                                        runtimes = new org.openapis.openapi.models.shared.StringFilter[]{{
                                            add(new StringFilter(StringComparisonEnum.PREFIX, "excepturi") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "in";
                                            }}),
                                            add(new StringFilter(StringComparisonEnum.EQUALS, "ducimus") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "error";
                                            }}),
                                        }};
                                        sortBy = LambdaFunctionSortByEnum.HIGH;
                                        sortOrder = SortOrderEnum.DESC;
                                    }};;
                                    lambdaLayerAggregation = new LambdaLayerAggregation() {{
                                        functionNames = new org.openapis.openapi.models.shared.StringFilter[]{{
                                            add(new StringFilter(StringComparisonEnum.PREFIX, "quaerat") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "optio";
                                            }}),
                                            add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "quidem") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "officiis";
                                            }}),
                                            add(new StringFilter(StringComparisonEnum.EQUALS, "modi") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "quam";
                                            }}),
                                            add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "sequi") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "sint";
                                            }}),
                                        }};
                                        layerArns = new org.openapis.openapi.models.shared.StringFilter[]{{
                                            add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "veniam") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "dicta";
                                            }}),
                                            add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "dicta") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "dolores";
                                            }}),
                                            add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "ipsa") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "necessitatibus";
                                            }}),
                                            add(new StringFilter(StringComparisonEnum.EQUALS, "quasi") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "maiores";
                                            }}),
                                        }};
                                        resourceIds = new org.openapis.openapi.models.shared.StringFilter[]{{
                                            add(new StringFilter(StringComparisonEnum.PREFIX, "occaecati") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "libero";
                                            }}),
                                            add(new StringFilter(StringComparisonEnum.PREFIX, "doloribus") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "aliquam";
                                            }}),
                                        }};
                                        sortBy = LambdaLayerSortByEnum.ALL;
                                        sortOrder = SortOrderEnum.DESC;
                                    }};;
                                    packageAggregation = new PackageAggregation() {{
                                        packageNames = new org.openapis.openapi.models.shared.StringFilter[]{{
                                            add(new StringFilter(StringComparisonEnum.PREFIX, "totam") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "animi";
                                            }}),
                                            add(new StringFilter(StringComparisonEnum.EQUALS, "saepe") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "odio";
                                            }}),
                                        }};
                                        sortBy = PackageSortByEnum.CRITICAL;
                                        sortOrder = SortOrderEnum.DESC;
                                    }};;
                                    repositoryAggregation = new RepositoryAggregation() {{
                                        repositories = new org.openapis.openapi.models.shared.StringFilter[]{{
                                            add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "velit") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "tempore";
                                            }}),
                                            add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "cum") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "delectus";
                                            }}),
                                            add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "deserunt") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "adipisci";
                                            }}),
                                        }};
                                        sortBy = RepositorySortByEnum.CRITICAL;
                                        sortOrder = SortOrderEnum.ASC;
                                    }};;
                                    titleAggregation = new TitleAggregation() {{
                                        resourceType = AggregationResourceTypeEnum.AWS_EC2_INSTANCE;
                                        sortBy = TitleSortByEnum.ALL;
                                        sortOrder = SortOrderEnum.ASC;
                                        titles = new org.openapis.openapi.models.shared.StringFilter[]{{
                                            add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "non") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "eligendi";
                                            }}),
                                            add(new StringFilter(StringComparisonEnum.EQUALS, "asperiores") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "itaque";
                                            }}),
                                            add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "laudantium") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "consequuntur";
                                            }}),
                                        }};
                                        vulnerabilityIds = new org.openapis.openapi.models.shared.StringFilter[]{{
                                            add(new StringFilter(StringComparisonEnum.PREFIX, "ab") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "amet";
                                            }}),
                                        }};
                                    }};;
                                }};;
                                maxResults = 242637L;
                                nextToken = "facilis";
                            }};) {{
                xAmzAlgorithm = "tempore";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "voluptatibus";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "nisi";
                maxResults = "quis";
                nextToken = "nisi";
            }};            

            ListFindingAggregationsResponse res = sdk.sdk.listFindingAggregations(req);

            if (res.listFindingAggregationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFindings

Lists findings for your environment.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFindingsRequest;
import org.openapis.openapi.models.operations.ListFindingsRequestBody;
import org.openapis.openapi.models.operations.ListFindingsRequestBodyFilterCriteria;
import org.openapis.openapi.models.operations.ListFindingsRequestBodySortCriteria;
import org.openapis.openapi.models.operations.ListFindingsResponse;
import org.openapis.openapi.models.shared.DateFilter;
import org.openapis.openapi.models.shared.MapComparisonEnum;
import org.openapis.openapi.models.shared.MapFilter;
import org.openapis.openapi.models.shared.NumberFilter;
import org.openapis.openapi.models.shared.PackageFilter;
import org.openapis.openapi.models.shared.PortRangeFilter;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortFieldEnum;
import org.openapis.openapi.models.shared.SortOrderEnum;
import org.openapis.openapi.models.shared.StringComparisonEnum;
import org.openapis.openapi.models.shared.StringFilter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFindingsRequest req = new ListFindingsRequest(                new ListFindingsRequestBody() {{
                                filterCriteria = new ListFindingsRequestBodyFilterCriteria() {{
                                    awsAccountId = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "ad") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "facilis";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "debitis") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "voluptatibus";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "reprehenderit") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "rerum";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "est") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "neque";
                                        }}),
                                    }};
                                    componentId = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "officiis") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "fugiat";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "error") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "dolor";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "esse") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "vitae";
                                        }}),
                                    }};
                                    componentType = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "delectus") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "aspernatur";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "illo") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "dignissimos";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "saepe") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "incidunt";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "reiciendis") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "veniam";
                                        }}),
                                    }};
                                    ec2InstanceImageId = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "repellat") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "praesentium";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "deleniti") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "sequi";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "aliquam") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "labore";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "repudiandae") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "provident";
                                        }}),
                                    }};
                                    ec2InstanceSubnetId = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "expedita") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "aspernatur";
                                        }}),
                                    }};
                                    ec2InstanceVpcId = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "dignissimos") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "repudiandae";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "repellendus") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "vero";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "impedit") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "dolorem";
                                        }}),
                                    }};
                                    ecrImageArchitecture = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "quae") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "voluptatem";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "quidem") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "illum";
                                        }}),
                                    }};
                                    ecrImageHash = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "laudantium") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "quasi";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "amet") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "earum";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "provident") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "dolorum";
                                        }}),
                                    }};
                                    ecrImagePushedAt = new org.openapis.openapi.models.shared.DateFilter[]{{
                                        add(new DateFilter() {{
                                            endInclusive = OffsetDateTime.parse("2022-08-20T07:41:58.408Z");
                                            startInclusive = OffsetDateTime.parse("2022-01-26T05:50:47.025Z");
                                        }}),
                                        add(new DateFilter() {{
                                            endInclusive = OffsetDateTime.parse("2021-11-28T13:56:44.956Z");
                                            startInclusive = OffsetDateTime.parse("2022-06-05T10:57:17.595Z");
                                        }}),
                                        add(new DateFilter() {{
                                            endInclusive = OffsetDateTime.parse("2022-06-19T09:27:18.675Z");
                                            startInclusive = OffsetDateTime.parse("2022-10-08T10:06:25.237Z");
                                        }}),
                                        add(new DateFilter() {{
                                            endInclusive = OffsetDateTime.parse("2022-10-03T19:15:55.395Z");
                                            startInclusive = OffsetDateTime.parse("2022-11-16T15:13:44.571Z");
                                        }}),
                                    }};
                                    ecrImageRegistry = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "beatae") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "occaecati";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "esse") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "labore";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "ea") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "perferendis";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "velit") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "dignissimos";
                                        }}),
                                    }};
                                    ecrImageRepositoryName = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "dignissimos") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "consectetur";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "temporibus") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "soluta";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "aspernatur") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "amet";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "laborum") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "itaque";
                                        }}),
                                    }};
                                    ecrImageTags = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "repellat") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "qui";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "nihil") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "explicabo";
                                        }}),
                                    }};
                                    exploitAvailable = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "deserunt") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "illo";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "in") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "non";
                                        }}),
                                    }};
                                    findingArn = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "modi") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "numquam";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "rem") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "explicabo";
                                        }}),
                                    }};
                                    findingStatus = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "voluptate") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "deleniti";
                                        }}),
                                    }};
                                    findingType = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "sit") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "libero";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "mollitia") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "eum";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "molestiae") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "fugiat";
                                        }}),
                                    }};
                                    firstObservedAt = new org.openapis.openapi.models.shared.DateFilter[]{{
                                        add(new DateFilter() {{
                                            endInclusive = OffsetDateTime.parse("2022-10-20T12:04:30.509Z");
                                            startInclusive = OffsetDateTime.parse("2022-12-26T22:32:30.778Z");
                                        }}),
                                        add(new DateFilter() {{
                                            endInclusive = OffsetDateTime.parse("2022-02-02T05:53:12.433Z");
                                            startInclusive = OffsetDateTime.parse("2022-08-02T23:28:33.531Z");
                                        }}),
                                    }};
                                    fixAvailable = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "consectetur") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "possimus";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "minus") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "quaerat";
                                        }}),
                                    }};
                                    inspectorScore = new org.openapis.openapi.models.shared.NumberFilter[]{{
                                        add(new NumberFilter() {{
                                            lowerInclusive = 7151.43;
                                            upperInclusive = 4813.75;
                                        }}),
                                    }};
                                    lambdaFunctionExecutionRoleArn = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "autem") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "facilis";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "aut") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "alias";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "veritatis") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "laudantium";
                                        }}),
                                    }};
                                    lambdaFunctionLastModifiedAt = new org.openapis.openapi.models.shared.DateFilter[]{{
                                        add(new DateFilter() {{
                                            endInclusive = OffsetDateTime.parse("2022-02-04T17:43:04.954Z");
                                            startInclusive = OffsetDateTime.parse("2021-01-17T21:44:22.334Z");
                                        }}),
                                    }};
                                    lambdaFunctionLayers = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "alias") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "sed";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "incidunt") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "hic";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "harum") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "qui";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "modi") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "beatae";
                                        }}),
                                    }};
                                    lambdaFunctionName = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "libero") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "molestias";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "ea") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "sequi";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "velit") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "ducimus";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "laborum") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "repellat";
                                        }}),
                                    }};
                                    lambdaFunctionRuntime = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "rerum") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "doloremque";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "rem") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "voluptates";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "dicta") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "ullam";
                                        }}),
                                    }};
                                    lastObservedAt = new org.openapis.openapi.models.shared.DateFilter[]{{
                                        add(new DateFilter() {{
                                            endInclusive = OffsetDateTime.parse("2022-10-25T01:41:54.228Z");
                                            startInclusive = OffsetDateTime.parse("2022-09-13T11:55:45.642Z");
                                        }}),
                                        add(new DateFilter() {{
                                            endInclusive = OffsetDateTime.parse("2022-09-06T23:12:52.252Z");
                                            startInclusive = OffsetDateTime.parse("2021-06-04T02:00:32.457Z");
                                        }}),
                                        add(new DateFilter() {{
                                            endInclusive = OffsetDateTime.parse("2022-04-18T22:35:00.200Z");
                                            startInclusive = OffsetDateTime.parse("2020-02-19T16:07:53.563Z");
                                        }}),
                                        add(new DateFilter() {{
                                            endInclusive = OffsetDateTime.parse("2022-10-06T23:47:52.743Z");
                                            startInclusive = OffsetDateTime.parse("2022-04-15T21:21:40.603Z");
                                        }}),
                                    }};
                                    networkProtocol = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "modi") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "itaque";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "doloribus") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "assumenda";
                                        }}),
                                    }};
                                    portRange = new org.openapis.openapi.models.shared.PortRangeFilter[]{{
                                        add(new PortRangeFilter() {{
                                            beginInclusive = 783397L;
                                            endInclusive = 883819L;
                                        }}),
                                        add(new PortRangeFilter() {{
                                            beginInclusive = 518990L;
                                            endInclusive = 969168L;
                                        }}),
                                        add(new PortRangeFilter() {{
                                            beginInclusive = 66074L;
                                            endInclusive = 573444L;
                                        }}),
                                        add(new PortRangeFilter() {{
                                            beginInclusive = 472414L;
                                            endInclusive = 458412L;
                                        }}),
                                    }};
                                    relatedVulnerabilities = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "vel") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "nesciunt";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "consequuntur") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "corporis";
                                        }}),
                                    }};
                                    resourceId = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "ipsa") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "distinctio";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "veniam") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "maiores";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "aliquam") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "neque";
                                        }}),
                                    }};
                                    resourceTags = new org.openapis.openapi.models.shared.MapFilter[]{{
                                        add(new MapFilter(MapComparisonEnum.EQUALS, "est") {{
                                            comparison = MapComparisonEnum.EQUALS;
                                            key = "doloribus";
                                            value = "fugiat";
                                        }}),
                                        add(new MapFilter(MapComparisonEnum.EQUALS, "vitae") {{
                                            comparison = MapComparisonEnum.EQUALS;
                                            key = "delectus";
                                            value = "velit";
                                        }}),
                                        add(new MapFilter(MapComparisonEnum.EQUALS, "illo") {{
                                            comparison = MapComparisonEnum.EQUALS;
                                            key = "nesciunt";
                                            value = "similique";
                                        }}),
                                    }};
                                    resourceType = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "unde") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "doloribus";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "cupiditate") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "explicabo";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "nesciunt") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "alias";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "veniam") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "sapiente";
                                        }}),
                                    }};
                                    severity = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "numquam") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "sint";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "in") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "adipisci";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "ab") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "ex";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "quisquam") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "hic";
                                        }}),
                                    }};
                                    title = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "architecto") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "fuga";
                                        }}),
                                    }};
                                    updatedAt = new org.openapis.openapi.models.shared.DateFilter[]{{
                                        add(new DateFilter() {{
                                            endInclusive = OffsetDateTime.parse("2022-11-01T07:18:11.315Z");
                                            startInclusive = OffsetDateTime.parse("2022-10-05T05:18:14.067Z");
                                        }}),
                                    }};
                                    vendorSeverity = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "facilis") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "exercitationem";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "culpa") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "sit";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "modi") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "amet";
                                        }}),
                                    }};
                                    vulnerabilityId = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "quisquam") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "itaque";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "officiis") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "doloribus";
                                        }}),
                                    }};
                                    vulnerabilitySource = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "nobis") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "culpa";
                                        }}),
                                    }};
                                    vulnerablePackages = new org.openapis.openapi.models.shared.PackageFilter[]{{
                                        add(new PackageFilter() {{
                                            architecture = new StringFilter(StringComparisonEnum.PREFIX, "perspiciatis") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "dicta";
                                            }};
                                            epoch = new NumberFilter() {{
                                                lowerInclusive = 8927.08;
                                                upperInclusive = 3548.21;
                                            }};
                                            name = new StringFilter(StringComparisonEnum.EQUALS, "veritatis") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "accusantium";
                                            }};
                                            release = new StringFilter(StringComparisonEnum.PREFIX, "quibusdam") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "cumque";
                                            }};
                                            sourceLambdaLayerArn = new StringFilter(StringComparisonEnum.NOT_EQUALS, "velit") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "nemo";
                                            }};
                                            sourceLayerHash = new StringFilter(StringComparisonEnum.PREFIX, "sed") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "dignissimos";
                                            }};
                                            version = new StringFilter(StringComparisonEnum.PREFIX, "cum") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "natus";
                                            }};
                                        }}),
                                        add(new PackageFilter() {{
                                            architecture = new StringFilter(StringComparisonEnum.NOT_EQUALS, "itaque") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "facilis";
                                            }};
                                            epoch = new NumberFilter() {{
                                                lowerInclusive = 3895.48;
                                                upperInclusive = 6017.14;
                                            }};
                                            name = new StringFilter(StringComparisonEnum.NOT_EQUALS, "cum") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "perspiciatis";
                                            }};
                                            release = new StringFilter(StringComparisonEnum.NOT_EQUALS, "incidunt") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "libero";
                                            }};
                                            sourceLambdaLayerArn = new StringFilter(StringComparisonEnum.PREFIX, "saepe") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "quod";
                                            }};
                                            sourceLayerHash = new StringFilter(StringComparisonEnum.EQUALS, "illum") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "quo";
                                            }};
                                            version = new StringFilter(StringComparisonEnum.NOT_EQUALS, "non") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "illum";
                                            }};
                                        }}),
                                        add(new PackageFilter() {{
                                            architecture = new StringFilter(StringComparisonEnum.NOT_EQUALS, "distinctio") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "assumenda";
                                            }};
                                            epoch = new NumberFilter() {{
                                                lowerInclusive = 8668.61;
                                                upperInclusive = 3233.65;
                                            }};
                                            name = new StringFilter(StringComparisonEnum.NOT_EQUALS, "laborum") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "laborum";
                                            }};
                                            release = new StringFilter(StringComparisonEnum.PREFIX, "alias") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "maxime";
                                            }};
                                            sourceLambdaLayerArn = new StringFilter(StringComparisonEnum.PREFIX, "laborum") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "deserunt";
                                            }};
                                            sourceLayerHash = new StringFilter(StringComparisonEnum.EQUALS, "quo") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "occaecati";
                                            }};
                                            version = new StringFilter(StringComparisonEnum.PREFIX, "magnam") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "fugit";
                                            }};
                                        }}),
                                        add(new PackageFilter() {{
                                            architecture = new StringFilter(StringComparisonEnum.NOT_EQUALS, "nostrum") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "eligendi";
                                            }};
                                            epoch = new NumberFilter() {{
                                                lowerInclusive = 8882.65;
                                                upperInclusive = 6036.5;
                                            }};
                                            name = new StringFilter(StringComparisonEnum.PREFIX, "magnam") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "error";
                                            }};
                                            release = new StringFilter(StringComparisonEnum.PREFIX, "fuga") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "esse";
                                            }};
                                            sourceLambdaLayerArn = new StringFilter(StringComparisonEnum.EQUALS, "deserunt") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "impedit";
                                            }};
                                            sourceLayerHash = new StringFilter(StringComparisonEnum.EQUALS, "voluptatem") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "laboriosam";
                                            }};
                                            version = new StringFilter(StringComparisonEnum.NOT_EQUALS, "consequatur") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "necessitatibus";
                                            }};
                                        }}),
                                    }};
                                }};;
                                maxResults = 51007L;
                                nextToken = "architecto";
                                sortCriteria = new ListFindingsRequestBodySortCriteria() {{
                                    field = SortFieldEnum.NETWORK_PROTOCOL;
                                    sortOrder = SortOrderEnum.DESC;
                                }};;
                            }};) {{
                xAmzAlgorithm = "blanditiis";
                xAmzContentSha256 = "quae";
                xAmzCredential = "magni";
                xAmzDate = "officiis";
                xAmzSecurityToken = "sed";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "impedit";
                maxResults = "ipsa";
                nextToken = "excepturi";
            }};            

            ListFindingsResponse res = sdk.sdk.listFindings(req);

            if (res.listFindingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMembers

List members associated with the Amazon Inspector delegated administrator for your organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMembersRequest;
import org.openapis.openapi.models.operations.ListMembersRequestBody;
import org.openapis.openapi.models.operations.ListMembersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListMembersRequest req = new ListMembersRequest(                new ListMembersRequestBody() {{
                                maxResults = 983000L;
                                nextToken = "laudantium";
                                onlyAssociated = false;
                            }};) {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "alias";
                xAmzCredential = "asperiores";
                xAmzDate = "rem";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "earum";
                maxResults = "doloribus";
                nextToken = "velit";
            }};            

            ListMembersResponse res = sdk.sdk.listMembers(req);

            if (res.listMembersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists all tags attached to a given resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("esse") {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "eligendi";
                xAmzCredential = "quasi";
                xAmzDate = "neque";
                xAmzSecurityToken = "vero";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "accusantium";
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

## listUsageTotals

Lists the Amazon Inspector usage totals over the last 30 days.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUsageTotalsRequest;
import org.openapis.openapi.models.operations.ListUsageTotalsRequestBody;
import org.openapis.openapi.models.operations.ListUsageTotalsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListUsageTotalsRequest req = new ListUsageTotalsRequest(                new ListUsageTotalsRequestBody() {{
                                accountIds = new String[]{{
                                    add("beatae"),
                                    add("incidunt"),
                                    add("dicta"),
                                    add("odit"),
                                }};
                                maxResults = 357639L;
                                nextToken = "rerum";
                            }};) {{
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "error";
                xAmzCredential = "vel";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "id";
                xAmzSignature = "laboriosam";
                xAmzSignedHeaders = "ex";
                maxResults = "quas";
                nextToken = "veritatis";
            }};            

            ListUsageTotalsResponse res = sdk.sdk.listUsageTotals(req);

            if (res.listUsageTotalsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds tags to a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("similique", "incidunt");
                                            }});, "quam") {{
                xAmzAlgorithm = "magni";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "delectus";
                xAmzDate = "omnis";
                xAmzSecurityToken = "sed";
                xAmzSignature = "nesciunt";
                xAmzSignedHeaders = "maxime";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes tags from a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("cupiditate",                 new String[]{{
                                add("excepturi"),
                                add("maiores"),
                            }}) {{
                xAmzAlgorithm = "laudantium";
                xAmzContentSha256 = "velit";
                xAmzCredential = "reiciendis";
                xAmzDate = "amet";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "quisquam";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateConfiguration

Updates setting configurations for your Amazon Inspector account. When you use this API as an Amazon Inspector delegated administrator this updates the setting for all accounts you manage. Member accounts in an organization cannot update this setting.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateConfigurationRequestBody;
import org.openapis.openapi.models.operations.UpdateConfigurationRequestBodyEcrConfiguration;
import org.openapis.openapi.models.operations.UpdateConfigurationResponse;
import org.openapis.openapi.models.shared.EcrRescanDurationEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateConfigurationRequest req = new UpdateConfigurationRequest(                new UpdateConfigurationRequestBody(                new UpdateConfigurationRequestBodyEcrConfiguration() {{
                                                rescanDuration = EcrRescanDurationEnum.DAYS30;
                                            }};);) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "asperiores";
                xAmzDate = "a";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "perspiciatis";
                xAmzSignedHeaders = "accusantium";
            }};            

            UpdateConfigurationResponse res = sdk.sdk.updateConfiguration(req);

            if (res.updateConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFilter

Specifies the action that is to be applied to the findings that match the filter.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFilterRequest;
import org.openapis.openapi.models.operations.UpdateFilterRequestBody;
import org.openapis.openapi.models.operations.UpdateFilterRequestBodyActionEnum;
import org.openapis.openapi.models.operations.UpdateFilterRequestBodyFilterCriteria;
import org.openapis.openapi.models.operations.UpdateFilterResponse;
import org.openapis.openapi.models.shared.DateFilter;
import org.openapis.openapi.models.shared.MapComparisonEnum;
import org.openapis.openapi.models.shared.MapFilter;
import org.openapis.openapi.models.shared.NumberFilter;
import org.openapis.openapi.models.shared.PackageFilter;
import org.openapis.openapi.models.shared.PortRangeFilter;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StringComparisonEnum;
import org.openapis.openapi.models.shared.StringFilter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateFilterRequest req = new UpdateFilterRequest(                new UpdateFilterRequestBody("minus") {{
                                action = UpdateFilterRequestBodyActionEnum.NONE;
                                description = "eveniet";
                                filterCriteria = new UpdateFilterRequestBodyFilterCriteria() {{
                                    awsAccountId = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "voluptates") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "quidem";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "eligendi") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "eius";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "sint") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "esse";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "maiores") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "a";
                                        }}),
                                    }};
                                    componentId = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "velit") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "deserunt";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "saepe") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "enim";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "officia") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "repudiandae";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "eius") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "quasi";
                                        }}),
                                    }};
                                    componentType = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "minus") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "nobis";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "quod") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "magnam";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "molestiae") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "corrupti";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "perferendis") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "laborum";
                                        }}),
                                    }};
                                    ec2InstanceImageId = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "sunt") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "molestias";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "earum") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "neque";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "exercitationem") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "ipsam";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "nisi") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "nihil";
                                        }}),
                                    }};
                                    ec2InstanceSubnetId = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "suscipit") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "quibusdam";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "repellendus") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "sit";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "sed") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "id";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "architecto") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "repellat";
                                        }}),
                                    }};
                                    ec2InstanceVpcId = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "voluptatibus") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "harum";
                                        }}),
                                    }};
                                    ecrImageArchitecture = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "dolorum") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "minus";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "error") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "earum";
                                        }}),
                                    }};
                                    ecrImageHash = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "harum") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "mollitia";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "corrupti") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "doloremque";
                                        }}),
                                    }};
                                    ecrImagePushedAt = new org.openapis.openapi.models.shared.DateFilter[]{{
                                        add(new DateFilter() {{
                                            endInclusive = OffsetDateTime.parse("2022-03-17T18:10:38.581Z");
                                            startInclusive = OffsetDateTime.parse("2022-08-31T18:31:27.247Z");
                                        }}),
                                    }};
                                    ecrImageRegistry = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "sed") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "dolor";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "minus") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "optio";
                                        }}),
                                    }};
                                    ecrImageRepositoryName = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "iste") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "asperiores";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "aut") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "accusantium";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "possimus") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "nostrum";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "sapiente") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "pariatur";
                                        }}),
                                    }};
                                    ecrImageTags = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "non") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "quos";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "quisquam") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "ad";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "inventore") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "consequuntur";
                                        }}),
                                    }};
                                    exploitAvailable = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "aliquid") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "est";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "voluptatum") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "cumque";
                                        }}),
                                    }};
                                    findingArn = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "blanditiis") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "recusandae";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "sit") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "sequi";
                                        }}),
                                    }};
                                    findingStatus = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "quidem") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "tenetur";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "magni") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "porro";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "commodi") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "voluptas";
                                        }}),
                                    }};
                                    findingType = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "maxime") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "aut";
                                        }}),
                                    }};
                                    firstObservedAt = new org.openapis.openapi.models.shared.DateFilter[]{{
                                        add(new DateFilter() {{
                                            endInclusive = OffsetDateTime.parse("2022-04-16T04:49:18.950Z");
                                            startInclusive = OffsetDateTime.parse("2020-07-27T17:15:40.261Z");
                                        }}),
                                        add(new DateFilter() {{
                                            endInclusive = OffsetDateTime.parse("2022-06-04T04:18:38.456Z");
                                            startInclusive = OffsetDateTime.parse("2022-11-07T01:08:30.512Z");
                                        }}),
                                    }};
                                    fixAvailable = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "quasi") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "libero";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "facere") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "dicta";
                                        }}),
                                    }};
                                    inspectorScore = new org.openapis.openapi.models.shared.NumberFilter[]{{
                                        add(new NumberFilter() {{
                                            lowerInclusive = 1053.72;
                                            upperInclusive = 7672.1;
                                        }}),
                                        add(new NumberFilter() {{
                                            lowerInclusive = 9645.11;
                                            upperInclusive = 2871.52;
                                        }}),
                                        add(new NumberFilter() {{
                                            lowerInclusive = 7126.4;
                                            upperInclusive = 5482.56;
                                        }}),
                                    }};
                                    lambdaFunctionExecutionRoleArn = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "pariatur") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "officiis";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "quod") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "quo";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "excepturi") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "porro";
                                        }}),
                                    }};
                                    lambdaFunctionLastModifiedAt = new org.openapis.openapi.models.shared.DateFilter[]{{
                                        add(new DateFilter() {{
                                            endInclusive = OffsetDateTime.parse("2021-06-14T08:06:22.179Z");
                                            startInclusive = OffsetDateTime.parse("2022-01-21T10:16:32.249Z");
                                        }}),
                                        add(new DateFilter() {{
                                            endInclusive = OffsetDateTime.parse("2022-11-21T19:44:57.459Z");
                                            startInclusive = OffsetDateTime.parse("2022-09-15T09:33:00.010Z");
                                        }}),
                                        add(new DateFilter() {{
                                            endInclusive = OffsetDateTime.parse("2020-09-24T20:46:17.902Z");
                                            startInclusive = OffsetDateTime.parse("2022-10-01T05:57:46.161Z");
                                        }}),
                                    }};
                                    lambdaFunctionLayers = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "voluptates") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "iusto";
                                        }}),
                                    }};
                                    lambdaFunctionName = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "voluptatem") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "rerum";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "reprehenderit") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "at";
                                        }}),
                                    }};
                                    lambdaFunctionRuntime = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "rerum") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "nihil";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "atque") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "atque";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "rem") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "est";
                                        }}),
                                    }};
                                    lastObservedAt = new org.openapis.openapi.models.shared.DateFilter[]{{
                                        add(new DateFilter() {{
                                            endInclusive = OffsetDateTime.parse("2022-06-12T00:16:23.616Z");
                                            startInclusive = OffsetDateTime.parse("2022-01-17T18:12:26.163Z");
                                        }}),
                                    }};
                                    networkProtocol = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "officia") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "saepe";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "quaerat") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "cumque";
                                        }}),
                                    }};
                                    portRange = new org.openapis.openapi.models.shared.PortRangeFilter[]{{
                                        add(new PortRangeFilter() {{
                                            beginInclusive = 156098L;
                                            endInclusive = 887284L;
                                        }}),
                                        add(new PortRangeFilter() {{
                                            beginInclusive = 651467L;
                                            endInclusive = 765070L;
                                        }}),
                                        add(new PortRangeFilter() {{
                                            beginInclusive = 337081L;
                                            endInclusive = 313590L;
                                        }}),
                                        add(new PortRangeFilter() {{
                                            beginInclusive = 430235L;
                                            endInclusive = 365539L;
                                        }}),
                                    }};
                                    relatedVulnerabilities = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "minus") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "sit";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "praesentium") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "recusandae";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "aliquid") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "fugit";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "sunt") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "sed";
                                        }}),
                                    }};
                                    resourceId = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "deserunt") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "laborum";
                                        }}),
                                    }};
                                    resourceTags = new org.openapis.openapi.models.shared.MapFilter[]{{
                                        add(new MapFilter(MapComparisonEnum.EQUALS, "eius") {{
                                            comparison = MapComparisonEnum.EQUALS;
                                            key = "sunt";
                                            value = "impedit";
                                        }}),
                                        add(new MapFilter(MapComparisonEnum.EQUALS, "at") {{
                                            comparison = MapComparisonEnum.EQUALS;
                                            key = "voluptatum";
                                            value = "ipsa";
                                        }}),
                                    }};
                                    resourceType = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "sequi") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "aspernatur";
                                        }}),
                                    }};
                                    severity = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "dolorem") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "hic";
                                        }}),
                                    }};
                                    title = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "enim") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "aspernatur";
                                        }}),
                                    }};
                                    updatedAt = new org.openapis.openapi.models.shared.DateFilter[]{{
                                        add(new DateFilter() {{
                                            endInclusive = OffsetDateTime.parse("2022-01-14T22:16:14.005Z");
                                            startInclusive = OffsetDateTime.parse("2022-03-29T11:57:17.823Z");
                                        }}),
                                    }};
                                    vendorSeverity = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "deleniti") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "repellat";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "aliquid") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "hic";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "ea") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "beatae";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "dignissimos") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "dolore";
                                        }}),
                                    }};
                                    vulnerabilityId = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "eveniet") {{
                                            comparison = StringComparisonEnum.PREFIX;
                                            value = "laudantium";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.NOT_EQUALS, "eius") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "velit";
                                        }}),
                                    }};
                                    vulnerabilitySource = new org.openapis.openapi.models.shared.StringFilter[]{{
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "explicabo") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "dignissimos";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.PREFIX, "facilis") {{
                                            comparison = StringComparisonEnum.NOT_EQUALS;
                                            value = "aliquid";
                                        }}),
                                        add(new StringFilter(StringComparisonEnum.EQUALS, "architecto") {{
                                            comparison = StringComparisonEnum.EQUALS;
                                            value = "ut";
                                        }}),
                                    }};
                                    vulnerablePackages = new org.openapis.openapi.models.shared.PackageFilter[]{{
                                        add(new PackageFilter() {{
                                            architecture = new StringFilter(StringComparisonEnum.NOT_EQUALS, "libero") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "dolor";
                                            }};
                                            epoch = new NumberFilter() {{
                                                lowerInclusive = 6152.77;
                                                upperInclusive = 749.21;
                                            }};
                                            name = new StringFilter(StringComparisonEnum.NOT_EQUALS, "sint") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "quos";
                                            }};
                                            release = new StringFilter(StringComparisonEnum.NOT_EQUALS, "aperiam") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "enim";
                                            }};
                                            sourceLambdaLayerArn = new StringFilter(StringComparisonEnum.EQUALS, "quae") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "laudantium";
                                            }};
                                            sourceLayerHash = new StringFilter(StringComparisonEnum.PREFIX, "tenetur") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "illum";
                                            }};
                                            version = new StringFilter(StringComparisonEnum.NOT_EQUALS, "architecto") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "modi";
                                            }};
                                        }}),
                                        add(new PackageFilter() {{
                                            architecture = new StringFilter(StringComparisonEnum.NOT_EQUALS, "sequi") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "labore";
                                            }};
                                            epoch = new NumberFilter() {{
                                                lowerInclusive = 9021.32;
                                                upperInclusive = 89.04;
                                            }};
                                            name = new StringFilter(StringComparisonEnum.NOT_EQUALS, "quisquam") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "debitis";
                                            }};
                                            release = new StringFilter(StringComparisonEnum.NOT_EQUALS, "deserunt") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "aliquam";
                                            }};
                                            sourceLambdaLayerArn = new StringFilter(StringComparisonEnum.EQUALS, "porro") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "reiciendis";
                                            }};
                                            sourceLayerHash = new StringFilter(StringComparisonEnum.NOT_EQUALS, "omnis") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "nobis";
                                            }};
                                            version = new StringFilter(StringComparisonEnum.PREFIX, "cupiditate") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "ipsam";
                                            }};
                                        }}),
                                        add(new PackageFilter() {{
                                            architecture = new StringFilter(StringComparisonEnum.NOT_EQUALS, "accusantium") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "quia";
                                            }};
                                            epoch = new NumberFilter() {{
                                                lowerInclusive = 3214.73;
                                                upperInclusive = 3927.52;
                                            }};
                                            name = new StringFilter(StringComparisonEnum.PREFIX, "sed") {{
                                                comparison = StringComparisonEnum.PREFIX;
                                                value = "quia";
                                            }};
                                            release = new StringFilter(StringComparisonEnum.NOT_EQUALS, "eos") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "iusto";
                                            }};
                                            sourceLambdaLayerArn = new StringFilter(StringComparisonEnum.EQUALS, "sint") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "nesciunt";
                                            }};
                                            sourceLayerHash = new StringFilter(StringComparisonEnum.EQUALS, "distinctio") {{
                                                comparison = StringComparisonEnum.EQUALS;
                                                value = "esse";
                                            }};
                                            version = new StringFilter(StringComparisonEnum.NOT_EQUALS, "aliquam") {{
                                                comparison = StringComparisonEnum.NOT_EQUALS;
                                                value = "quam";
                                            }};
                                        }}),
                                    }};
                                }};;
                                name = "Trevor Lemke";
                                reason = "voluptatibus";
                            }};) {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "non";
                xAmzCredential = "ullam";
                xAmzDate = "laborum";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "animi";
            }};            

            UpdateFilterResponse res = sdk.sdk.updateFilter(req);

            if (res.updateFilterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationConfiguration

Updates the configurations for your Amazon Inspector organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigurationRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigurationRequestBodyAutoEnable;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationConfigurationRequest req = new UpdateOrganizationConfigurationRequest(                new UpdateOrganizationConfigurationRequestBody(                new UpdateOrganizationConfigurationRequestBodyAutoEnable() {{
                                                ec2 = false;
                                                ecr = false;
                                                lambda = false;
                                            }};);) {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "non";
                xAmzCredential = "necessitatibus";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "laboriosam";
                xAmzSignedHeaders = "voluptatem";
            }};            

            UpdateOrganizationConfigurationResponse res = sdk.sdk.updateOrganizationConfiguration(req);

            if (res.updateOrganizationConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
