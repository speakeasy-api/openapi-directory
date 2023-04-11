import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CancelWorldExportJobRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (arn) of the world export job to cancel.
     */
    job: string;
}
export declare class CancelWorldExportJobRequest extends SpeakeasyBase {
    requestBody: CancelWorldExportJobRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CancelWorldExportJobResponse extends SpeakeasyBase {
    /**
     * Success
     */
    cancelWorldExportJobResponse?: Record<string, any>;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
