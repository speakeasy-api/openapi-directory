import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum InferSNOMEDCTXAmzTargetEnum {
    ComprehendMedical20181030InferSNOMEDCT = "ComprehendMedical_20181030.InferSNOMEDCT"
}
export declare class InferSNOMEDCTRequest extends SpeakeasyBase {
    inferSNOMEDCTRequest: shared.InferSNOMEDCTRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: InferSNOMEDCTXAmzTargetEnum;
}
export declare class InferSNOMEDCTResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    inferSNOMEDCTResponse?: shared.InferSNOMEDCTResponse;
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
