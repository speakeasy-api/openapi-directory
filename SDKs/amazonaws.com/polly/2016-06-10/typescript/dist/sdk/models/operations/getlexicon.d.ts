import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLexiconRequest extends SpeakeasyBase {
    /**
     * Name of the lexicon.
     */
    lexiconName: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetLexiconResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getLexiconOutput?: shared.GetLexiconOutput;
    /**
     * LexiconNotFoundException
     */
    lexiconNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceFailureException
     */
    serviceFailureException?: any;
}
