import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ContentSearchHelpArticlesRequest extends SpeakeasyBase {
    searchtext: string;
    size: string;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class ContentSearchHelpArticles200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: Record<string, any>;
    throttleSeconds?: number;
}
export declare class ContentSearchHelpArticlesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
