import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ContentSearchContentByTagAndTypeRequest extends SpeakeasyBase {
    /**
     * Page number for the search results starting with page 1.
     */
    currentpage?: number;
    /**
     * Not used.
     */
    head?: boolean;
    /**
     * Not used.
     */
    itemsperpage?: number;
    locale: string;
    tag: string;
    type: string;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class ContentSearchContentByTagAndType200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.SearchResultOfContentItemPublicContract;
    throttleSeconds?: number;
}
export declare class ContentSearchContentByTagAndTypeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
