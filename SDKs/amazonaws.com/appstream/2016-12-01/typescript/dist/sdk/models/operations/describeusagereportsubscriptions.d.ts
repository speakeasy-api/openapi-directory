import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeUsageReportSubscriptionsXAmzTargetEnum {
    PhotonAdminProxyServiceDescribeUsageReportSubscriptions = "PhotonAdminProxyService.DescribeUsageReportSubscriptions"
}
export declare class DescribeUsageReportSubscriptionsRequest extends SpeakeasyBase {
    describeUsageReportSubscriptionsRequest: shared.DescribeUsageReportSubscriptionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeUsageReportSubscriptionsXAmzTargetEnum;
}
export declare class DescribeUsageReportSubscriptionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeUsageReportSubscriptionsResult?: shared.DescribeUsageReportSubscriptionsResult;
    /**
     * InvalidAccountStatusException
     */
    invalidAccountStatusException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
