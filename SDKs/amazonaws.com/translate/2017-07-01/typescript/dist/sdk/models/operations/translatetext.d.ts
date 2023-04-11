import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum TranslateTextXAmzTargetEnum {
    AWSShineFrontendService20170701TranslateText = "AWSShineFrontendService_20170701.TranslateText"
}
export declare class TranslateTextRequest extends SpeakeasyBase {
    translateTextRequest: shared.TranslateTextRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TranslateTextXAmzTargetEnum;
}
export declare class TranslateTextResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DetectedLanguageLowConfidenceException
     */
    detectedLanguageLowConfidenceException?: any;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
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
    /**
     * Success
     */
    translateTextResponse?: shared.TranslateTextResponse;
    /**
     * UnsupportedLanguagePairException
     */
    unsupportedLanguagePairException?: any;
}
