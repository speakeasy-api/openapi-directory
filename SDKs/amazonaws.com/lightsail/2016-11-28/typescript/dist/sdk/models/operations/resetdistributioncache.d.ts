import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ResetDistributionCacheXAmzTargetEnum {
    Lightsail20161128ResetDistributionCache = "Lightsail_20161128.ResetDistributionCache"
}
export declare class ResetDistributionCacheRequest extends SpeakeasyBase {
    resetDistributionCacheRequest: shared.ResetDistributionCacheRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ResetDistributionCacheXAmzTargetEnum;
}
export declare class ResetDistributionCacheResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * OperationFailureException
     */
    operationFailureException?: any;
    /**
     * Success
     */
    resetDistributionCacheResult?: shared.ResetDistributionCacheResult;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthenticatedException
     */
    unauthenticatedException?: any;
}
