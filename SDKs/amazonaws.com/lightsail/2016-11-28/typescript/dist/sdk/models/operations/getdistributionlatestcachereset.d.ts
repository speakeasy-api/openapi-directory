import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetDistributionLatestCacheResetXAmzTargetEnum {
    Lightsail20161128GetDistributionLatestCacheReset = "Lightsail_20161128.GetDistributionLatestCacheReset"
}
export declare class GetDistributionLatestCacheResetRequest extends SpeakeasyBase {
    getDistributionLatestCacheResetRequest: shared.GetDistributionLatestCacheResetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDistributionLatestCacheResetXAmzTargetEnum;
}
export declare class GetDistributionLatestCacheResetResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getDistributionLatestCacheResetResult?: shared.GetDistributionLatestCacheResetResult;
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
