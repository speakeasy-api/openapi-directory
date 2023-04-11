import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DetectPHIXAmzTargetEnum {
    ComprehendMedical20181030DetectPHI = "ComprehendMedical_20181030.DetectPHI"
}
export declare class DetectPHIRequest extends SpeakeasyBase {
    detectPHIRequest: shared.DetectPHIRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DetectPHIXAmzTargetEnum;
}
export declare class DetectPHIResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    detectPHIResponse?: shared.DetectPHIResponse;
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
