import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetBucketBundlesXAmzTargetEnum {
    Lightsail20161128GetBucketBundles = "Lightsail_20161128.GetBucketBundles"
}
export declare class GetBucketBundlesRequest extends SpeakeasyBase {
    getBucketBundlesRequest: shared.GetBucketBundlesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetBucketBundlesXAmzTargetEnum;
}
export declare class GetBucketBundlesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getBucketBundlesResult?: shared.GetBucketBundlesResult;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
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
}
