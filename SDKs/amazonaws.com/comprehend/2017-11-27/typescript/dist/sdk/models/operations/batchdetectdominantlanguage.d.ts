import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchDetectDominantLanguageXAmzTargetEnum {
    Comprehend20171127BatchDetectDominantLanguage = "Comprehend_20171127.BatchDetectDominantLanguage"
}
export declare class BatchDetectDominantLanguageRequest extends SpeakeasyBase {
    batchDetectDominantLanguageRequest: shared.BatchDetectDominantLanguageRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchDetectDominantLanguageXAmzTargetEnum;
}
export declare class BatchDetectDominantLanguageResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchDetectDominantLanguageResponse?: shared.BatchDetectDominantLanguageResponse;
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
}
