import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchDetectTargetedSentimentXAmzTargetEnum {
    Comprehend20171127BatchDetectTargetedSentiment = "Comprehend_20171127.BatchDetectTargetedSentiment"
}
export declare class BatchDetectTargetedSentimentRequest extends SpeakeasyBase {
    batchDetectTargetedSentimentRequest: shared.BatchDetectTargetedSentimentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchDetectTargetedSentimentXAmzTargetEnum;
}
export declare class BatchDetectTargetedSentimentResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchDetectTargetedSentimentResponse?: shared.BatchDetectTargetedSentimentResponse;
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
