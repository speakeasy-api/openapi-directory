import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListSnapshotsUsingGETRequest extends SpeakeasyBase {
    /**
     * apiKey
     */
    apiKey: string;
}
export declare class ListSnapshotsUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    manageSnapshots?: shared.ManageSnapshot[];
    /**
     * json error
     */
    messageModel?: shared.MessageModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
