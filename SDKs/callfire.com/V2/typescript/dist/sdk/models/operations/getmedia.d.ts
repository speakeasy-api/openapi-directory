import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMediaSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetMediaRequest extends SpeakeasyBase {
    /**
     * Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
     */
    fields?: string;
    /**
     * An id of a media resource
     */
    id: number;
}
export declare class GetMediaResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * successful operation
     */
    media?: shared.Media;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
