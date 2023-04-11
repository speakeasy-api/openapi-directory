import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum InferRxNormXAmzTargetEnum {
    ComprehendMedical20181030InferRxNorm = "ComprehendMedical_20181030.InferRxNorm"
}
export declare class InferRxNormRequest extends SpeakeasyBase {
    inferRxNormRequest: shared.InferRxNormRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: InferRxNormXAmzTargetEnum;
}
export declare class InferRxNormResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    inferRxNormResponse?: shared.InferRxNormResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidEncodingException
     */
    invalidEncodingException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * TextSizeLimitExceededException
     */
    textSizeLimitExceededException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
