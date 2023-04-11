import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum DeleteUsageReportSubscriptionXAmzTargetEnum {
    PhotonAdminProxyServiceDeleteUsageReportSubscription = "PhotonAdminProxyService.DeleteUsageReportSubscription"
}
export declare class DeleteUsageReportSubscriptionRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteUsageReportSubscriptionXAmzTargetEnum;
}
export declare class DeleteUsageReportSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteUsageReportSubscriptionResult?: Record<string, any>;
    /**
     * InvalidAccountStatusException
     */
    invalidAccountStatusException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
