import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DetectTargetedSentimentXAmzTargetEnum {
    Comprehend20171127DetectTargetedSentiment = "Comprehend_20171127.DetectTargetedSentiment"
}
export declare class DetectTargetedSentimentRequest extends SpeakeasyBase {
    detectTargetedSentimentRequest: shared.DetectTargetedSentimentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DetectTargetedSentimentXAmzTargetEnum;
}
export declare class DetectTargetedSentimentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    detectTargetedSentimentResponse?: shared.DetectTargetedSentimentResponse;
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
