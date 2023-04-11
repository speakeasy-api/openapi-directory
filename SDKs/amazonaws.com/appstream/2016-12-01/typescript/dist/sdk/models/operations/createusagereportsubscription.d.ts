import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateUsageReportSubscriptionXAmzTargetEnum {
    PhotonAdminProxyServiceCreateUsageReportSubscription = "PhotonAdminProxyService.CreateUsageReportSubscription"
}
export declare class CreateUsageReportSubscriptionRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateUsageReportSubscriptionXAmzTargetEnum;
}
export declare class CreateUsageReportSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createUsageReportSubscriptionResult?: shared.CreateUsageReportSubscriptionResult;
    /**
     * InvalidAccountStatusException
     */
    invalidAccountStatusException?: any;
    /**
     * InvalidRoleException
     */
    invalidRoleException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
