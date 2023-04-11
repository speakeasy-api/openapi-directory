import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCallRecordingByNameSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetCallRecordingByNameRequest extends SpeakeasyBase {
    /**
     * Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
     */
    fields?: string;
    /**
     * An id of a call
     */
    id: number;
    /**
     * A name of a recording
     */
    name: string;
}
export declare class GetCallRecordingByNameResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    callRecording?: shared.CallRecording;
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
