import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ContentSearchContentWithTextRequest extends SpeakeasyBase {
    /**
     * Content type tag: Help, News, etc. Supply multiple ctypes separated by space.
     */
    ctype?: string;
    /**
     * Page number for the search results, starting with page 1.
     */
    currentpage?: number;
    /**
     * Not used.
     */
    head?: boolean;
    locale: string;
    /**
     * Word or phrase for the search.
     */
    searchtext?: string;
    /**
     * For analytics, hint at the part of the app that triggered the search. Optional.
     */
    source?: string;
    /**
     * Tag used on the content to be searched.
     */
    tag?: string;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class ContentSearchContentWithText200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.SearchResultOfContentItemPublicContract;
    throttleSeconds?: number;
}
export declare class ContentSearchContentWithTextResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
