import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetBucketAccessKeysXAmzTargetEnum {
    Lightsail20161128GetBucketAccessKeys = "Lightsail_20161128.GetBucketAccessKeys"
}
export declare class GetBucketAccessKeysRequest extends SpeakeasyBase {
    getBucketAccessKeysRequest: shared.GetBucketAccessKeysRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetBucketAccessKeysXAmzTargetEnum;
}
export declare class GetBucketAccessKeysResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getBucketAccessKeysResult?: shared.GetBucketAccessKeysResult;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthenticatedException
     */
    unauthenticatedException?: any;
}
