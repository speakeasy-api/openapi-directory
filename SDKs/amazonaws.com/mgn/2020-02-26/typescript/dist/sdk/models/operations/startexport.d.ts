import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StartExportRequestBody extends SpeakeasyBase {
    /**
     * Start export request s3 bucket.
     */
    s3Bucket: string;
    /**
     * Start export request s3 bucket owner.
     */
    s3BucketOwner?: string;
    /**
     * Start export request s3key.
     */
    s3Key: string;
}
export declare class StartExportRequest extends SpeakeasyBase {
    requestBody: StartExportRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartExportResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    startExportResponse?: shared.StartExportResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
