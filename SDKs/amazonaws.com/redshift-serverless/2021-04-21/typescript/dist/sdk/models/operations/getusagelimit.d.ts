import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetUsageLimitXAmzTargetEnum {
    RedshiftServerlessGetUsageLimit = "RedshiftServerless.GetUsageLimit"
}
export declare class GetUsageLimitRequest extends SpeakeasyBase {
    getUsageLimitRequest: shared.GetUsageLimitRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetUsageLimitXAmzTargetEnum;
}
export declare class GetUsageLimitResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    getUsageLimitResponse?: shared.GetUsageLimitResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
