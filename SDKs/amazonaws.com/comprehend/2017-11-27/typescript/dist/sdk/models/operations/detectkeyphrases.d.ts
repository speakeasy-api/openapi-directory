import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DetectKeyPhrasesXAmzTargetEnum {
    Comprehend20171127DetectKeyPhrases = "Comprehend_20171127.DetectKeyPhrases"
}
export declare class DetectKeyPhrasesRequest extends SpeakeasyBase {
    detectKeyPhrasesRequest: shared.DetectKeyPhrasesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DetectKeyPhrasesXAmzTargetEnum;
}
export declare class DetectKeyPhrasesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    detectKeyPhrasesResponse?: shared.DetectKeyPhrasesResponse;
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
