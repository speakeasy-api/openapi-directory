import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateBucketBundleXAmzTargetEnum {
    Lightsail20161128UpdateBucketBundle = "Lightsail_20161128.UpdateBucketBundle"
}
export declare class UpdateBucketBundleRequest extends SpeakeasyBase {
    updateBucketBundleRequest: shared.UpdateBucketBundleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateBucketBundleXAmzTargetEnum;
}
export declare class UpdateBucketBundleResponse extends SpeakeasyBase {
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
    updateBucketBundleResult?: shared.UpdateBucketBundleResult;
}
