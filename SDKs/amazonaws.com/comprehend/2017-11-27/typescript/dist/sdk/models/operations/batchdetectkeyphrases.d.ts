import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchDetectKeyPhrasesXAmzTargetEnum {
    Comprehend20171127BatchDetectKeyPhrases = "Comprehend_20171127.BatchDetectKeyPhrases"
}
export declare class BatchDetectKeyPhrasesRequest extends SpeakeasyBase {
    batchDetectKeyPhrasesRequest: shared.BatchDetectKeyPhrasesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchDetectKeyPhrasesXAmzTargetEnum;
}
export declare class BatchDetectKeyPhrasesResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchDetectKeyPhrasesResponse?: shared.BatchDetectKeyPhrasesResponse;
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
