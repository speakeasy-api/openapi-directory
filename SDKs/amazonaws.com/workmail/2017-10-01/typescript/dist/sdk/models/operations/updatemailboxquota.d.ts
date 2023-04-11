import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateMailboxQuotaXAmzTargetEnum {
    WorkMailServiceUpdateMailboxQuota = "WorkMailService.UpdateMailboxQuota"
}
export declare class UpdateMailboxQuotaRequest extends SpeakeasyBase {
    updateMailboxQuotaRequest: shared.UpdateMailboxQuotaRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateMailboxQuotaXAmzTargetEnum;
}
export declare class UpdateMailboxQuotaResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * EntityStateException
     */
    entityStateException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * OrganizationNotFoundException
     */
    organizationNotFoundException?: any;
    /**
     * OrganizationStateException
     */
    organizationStateException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateMailboxQuotaResponse?: Record<string, any>;
}
