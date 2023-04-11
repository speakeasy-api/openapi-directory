import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DetectDominantLanguageXAmzTargetEnum {
    Comprehend20171127DetectDominantLanguage = "Comprehend_20171127.DetectDominantLanguage"
}
export declare class DetectDominantLanguageRequest extends SpeakeasyBase {
    detectDominantLanguageRequest: shared.DetectDominantLanguageRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DetectDominantLanguageXAmzTargetEnum;
}
export declare class DetectDominantLanguageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    detectDominantLanguageResponse?: shared.DetectDominantLanguageResponse;
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
