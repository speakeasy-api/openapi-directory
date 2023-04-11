import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ContentGetContentByTagAndTypeRequest extends SpeakeasyBase {
    /**
     * Not used.
     */
    head?: boolean;
    locale: string;
    tag: string;
    type: string;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class ContentGetContentByTagAndType200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.ContentContentItemPublicContract;
    throttleSeconds?: number;
}
export declare class ContentGetContentByTagAndTypeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
