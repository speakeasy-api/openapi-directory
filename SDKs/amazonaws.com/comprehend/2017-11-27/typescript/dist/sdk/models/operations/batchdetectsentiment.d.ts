import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchDetectSentimentXAmzTargetEnum {
    Comprehend20171127BatchDetectSentiment = "Comprehend_20171127.BatchDetectSentiment"
}
export declare class BatchDetectSentimentRequest extends SpeakeasyBase {
    batchDetectSentimentRequest: shared.BatchDetectSentimentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchDetectSentimentXAmzTargetEnum;
}
export declare class BatchDetectSentimentResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchDetectSentimentResponse?: shared.BatchDetectSentimentResponse;
    /**
     * BatchSizeLimitExceededException
     */
    batchSizeLimitExceededException?: any;
    contentType: string;
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
