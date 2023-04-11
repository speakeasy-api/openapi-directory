import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SetResourceAccessForBucketXAmzTargetEnum {
    Lightsail20161128SetResourceAccessForBucket = "Lightsail_20161128.SetResourceAccessForBucket"
}
export declare class SetResourceAccessForBucketRequest extends SpeakeasyBase {
    setResourceAccessForBucketRequest: shared.SetResourceAccessForBucketRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SetResourceAccessForBucketXAmzTargetEnum;
}
export declare class SetResourceAccessForBucketResponse extends SpeakeasyBase {
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
     * ServiceException
     */
    serviceException?: any;
    /**
     * Success
     */
    setResourceAccessForBucketResult?: shared.SetResourceAccessForBucketResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthenticatedException
     */
    unauthenticatedException?: any;
}
