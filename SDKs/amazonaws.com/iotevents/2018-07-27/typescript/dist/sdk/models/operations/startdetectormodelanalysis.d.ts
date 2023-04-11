import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Information that defines how a detector operates.
 */
export declare class StartDetectorModelAnalysisRequestBodyDetectorModelDefinition extends SpeakeasyBase {
    initialStateName?: string;
    states?: shared.State[];
}
export declare class StartDetectorModelAnalysisRequestBody extends SpeakeasyBase {
    /**
     * Information that defines how a detector operates.
     */
    detectorModelDefinition: StartDetectorModelAnalysisRequestBodyDetectorModelDefinition;
}
export declare class StartDetectorModelAnalysisRequest extends SpeakeasyBase {
    requestBody: StartDetectorModelAnalysisRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartDetectorModelAnalysisResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * Success
     */
    startDetectorModelAnalysisResponse?: shared.StartDetectorModelAnalysisResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
