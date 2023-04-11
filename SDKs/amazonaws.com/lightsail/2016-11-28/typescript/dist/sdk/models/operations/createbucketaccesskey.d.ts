import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateBucketAccessKeyXAmzTargetEnum {
    Lightsail20161128CreateBucketAccessKey = "Lightsail_20161128.CreateBucketAccessKey"
}
export declare class CreateBucketAccessKeyRequest extends SpeakeasyBase {
    createBucketAccessKeyRequest: shared.CreateBucketAccessKeyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateBucketAccessKeyXAmzTargetEnum;
}
export declare class CreateBucketAccessKeyResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createBucketAccessKeyResult?: shared.CreateBucketAccessKeyResult;
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
