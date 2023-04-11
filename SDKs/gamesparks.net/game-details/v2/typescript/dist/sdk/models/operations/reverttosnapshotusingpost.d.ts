import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RevertToSnapshotUsingPOSTRequest extends SpeakeasyBase {
    /**
     * apiKey
     */
    apiKey: string;
    /**
     * snapshotId
     */
    snapshotId: string;
}
export declare class RevertToSnapshotUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    messageModel?: shared.MessageModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
