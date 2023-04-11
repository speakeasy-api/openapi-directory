import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ContentGetContentByIdRequest extends SpeakeasyBase {
    /**
     * false
     */
    head?: boolean;
    id: number;
    locale: string;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class ContentGetContentById200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.ContentContentItemPublicContract;
    throttleSeconds?: number;
}
export declare class ContentGetContentByIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
