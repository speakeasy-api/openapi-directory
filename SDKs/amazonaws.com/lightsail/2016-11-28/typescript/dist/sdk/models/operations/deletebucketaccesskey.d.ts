import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteBucketAccessKeyXAmzTargetEnum {
    Lightsail20161128DeleteBucketAccessKey = "Lightsail_20161128.DeleteBucketAccessKey"
}
export declare class DeleteBucketAccessKeyRequest extends SpeakeasyBase {
    deleteBucketAccessKeyRequest: shared.DeleteBucketAccessKeyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteBucketAccessKeyXAmzTargetEnum;
}
export declare class DeleteBucketAccessKeyResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteBucketAccessKeyResult?: shared.DeleteBucketAccessKeyResult;
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
