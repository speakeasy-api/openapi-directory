import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteLexiconRequest extends SpeakeasyBase {
    /**
     * The name of the lexicon to delete. Must be an existing lexicon in the region.
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
export declare class DeleteLexiconResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteLexiconOutput?: Record<string, any>;
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
