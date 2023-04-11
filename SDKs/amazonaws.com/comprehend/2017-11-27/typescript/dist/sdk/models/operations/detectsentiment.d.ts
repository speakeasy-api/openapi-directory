import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DetectSentimentXAmzTargetEnum {
    Comprehend20171127DetectSentiment = "Comprehend_20171127.DetectSentiment"
}
export declare class DetectSentimentRequest extends SpeakeasyBase {
    detectSentimentRequest: shared.DetectSentimentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DetectSentimentXAmzTargetEnum;
}
export declare class DetectSentimentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    detectSentimentResponse?: shared.DetectSentimentResponse;
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
     * TextSizeLimitExceededException
     */
    textSizeLimitExceededException?: any;
    /**
     * UnsupportedLanguageException
     */
    unsupportedLanguageException?: any;
}
