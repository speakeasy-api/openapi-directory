import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GETSnapshotUsingGETRequest extends SpeakeasyBase {
    /**
     * apiKey
     */
    apiKey: string;
    /**
     * snapshotId
     */
    snapshotId: string;
}
export declare class GETSnapshotUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * json error
     */
    messageModel?: shared.MessageModel;
    /**
     * OK
     */
    snapshotModel?: shared.SnapshotModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
