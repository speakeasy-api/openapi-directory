import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutLexiconRequestBody extends SpeakeasyBase {
    /**
     * Content of the PLS lexicon as string data.
     */
    content: string;
}
export declare class PutLexiconRequest extends SpeakeasyBase {
    /**
     * Name of the lexicon. The name must follow the regular express format [0-9A-Za-z]{1,20}. That is, the name is a case-sensitive alphanumeric string up to 20 characters long.
     */
    lexiconName: string;
    requestBody: PutLexiconRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutLexiconResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidLexiconException
     */
    invalidLexiconException?: any;
    /**
     * LexiconSizeExceededException
     */
    lexiconSizeExceededException?: any;
    /**
     * MaxLexemeLengthExceededException
     */
    maxLexemeLengthExceededException?: any;
    /**
     * MaxLexiconsNumberExceededException
     */
    maxLexiconsNumberExceededException?: any;
    /**
     * Success
     */
    putLexiconOutput?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceFailureException
     */
    serviceFailureException?: any;
    /**
     * UnsupportedPlsAlphabetException
     */
    unsupportedPlsAlphabetException?: any;
    /**
     * UnsupportedPlsLanguageException
     */
    unsupportedPlsLanguageException?: any;
}
