import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetAWSDefaultServiceQuotaXAmzTargetEnum {
    ServiceQuotasV20190624GetAWSDefaultServiceQuota = "ServiceQuotasV20190624.GetAWSDefaultServiceQuota"
}
export declare class GetAWSDefaultServiceQuotaRequest extends SpeakeasyBase {
    getAWSDefaultServiceQuotaRequest: shared.GetAWSDefaultServiceQuotaRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAWSDefaultServiceQuotaXAmzTargetEnum;
}
export declare class GetAWSDefaultServiceQuotaResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getAWSDefaultServiceQuotaResponse?: shared.GetAWSDefaultServiceQuotaResponse;
    /**
     * IllegalArgumentException
     */
    illegalArgumentException?: any;
    /**
     * NoSuchResourceException
     */
    noSuchResourceException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
