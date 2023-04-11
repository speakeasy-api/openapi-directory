import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetCallRecordingMp3ByNameSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetCallRecordingMp3ByNameRequest extends SpeakeasyBase {
    /**
     * An id of a call
     */
    id: number;
    /**
     * A name of a recording
     */
    name: string;
}
export declare class GetCallRecordingMp3ByNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
