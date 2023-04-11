import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCallRecordingsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetCallRecordingsRequest extends SpeakeasyBase {
    /**
     * Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
     */
    fields?: string;
    /**
     * An id of a call
     */
    id: number;
}
export declare class GetCallRecordingsResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    callRecordingList?: shared.CallRecordingList;
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
