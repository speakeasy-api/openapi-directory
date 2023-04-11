import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CancelWorldGenerationJobRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (arn) of the world generator job to cancel.
     */
    job: string;
}
export declare class CancelWorldGenerationJobRequest extends SpeakeasyBase {
    requestBody: CancelWorldGenerationJobRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CancelWorldGenerationJobResponse extends SpeakeasyBase {
    /**
     * Success
     */
    cancelWorldGenerationJobResponse?: Record<string, any>;
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
