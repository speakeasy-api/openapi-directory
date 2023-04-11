import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CopySnapshotToExistingGameUsingPOSTRequest extends SpeakeasyBase {
    /**
     * apiKey
     */
    apiKey: string;
    /**
     * snapshotId
     */
    snapshotId: string;
    /**
     * targetApiKey
     */
    targetApiKey: string;
}
export declare class CopySnapshotToExistingGameUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    manageResult?: shared.ManageResult;
    /**
     * json error
     */
    messageModel?: shared.MessageModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
