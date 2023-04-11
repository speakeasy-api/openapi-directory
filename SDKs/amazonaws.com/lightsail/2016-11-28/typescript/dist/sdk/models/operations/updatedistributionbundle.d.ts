import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateDistributionBundleXAmzTargetEnum {
    Lightsail20161128UpdateDistributionBundle = "Lightsail_20161128.UpdateDistributionBundle"
}
export declare class UpdateDistributionBundleRequest extends SpeakeasyBase {
    updateDistributionBundleRequest: shared.UpdateDistributionBundleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDistributionBundleXAmzTargetEnum;
}
export declare class UpdateDistributionBundleResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceException
     */
    serviceException?: any;
    /**
     * UnauthenticatedException
     */
    unauthenticatedException?: any;
    /**
     * Success
     */
    updateDistributionBundleResult?: shared.UpdateDistributionBundleResult;
}
