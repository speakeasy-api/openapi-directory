import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * S3 bucket source.
 */
export declare class StartImportRequestBodyS3BucketSource extends SpeakeasyBase {
    s3Bucket?: string;
    s3BucketOwner?: string;
    s3Key?: string;
}
export declare class StartImportRequestBody extends SpeakeasyBase {
    /**
     * Start import request client token.
     */
    clientToken?: string;
    /**
     * S3 bucket source.
     */
    s3BucketSource: StartImportRequestBodyS3BucketSource;
}
export declare class StartImportRequest extends SpeakeasyBase {
    requestBody: StartImportRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartImportResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * Success
     */
    startImportResponse?: shared.StartImportResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
