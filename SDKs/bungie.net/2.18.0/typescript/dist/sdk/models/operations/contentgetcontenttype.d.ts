import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ContentGetContentTypeRequest extends SpeakeasyBase {
    type: string;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class ContentGetContentType200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.ContentModelsContentTypeDescription;
    throttleSeconds?: number;
}
export declare class ContentGetContentTypeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
