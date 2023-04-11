import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SuggestFormatEnum {
    SDK = "sdk"
}
export declare enum SuggestPrettyEnum {
    True = "true"
}
export declare class SuggestRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    format: SuggestFormatEnum;
    pretty: SuggestPrettyEnum;
    /**
     * Specifies the string for which you want to get suggestions.
     */
    q: string;
    /**
     * Specifies the maximum number of suggestions to return.
     */
    size?: number;
    /**
     * Specifies the name of the suggester to use to find suggested matches.
     */
    suggester: string;
}
export declare class SuggestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * SearchException
     */
    searchException?: shared.SearchException;
    /**
     * Success
     */
    suggestResponse?: shared.SuggestResponse;
}
