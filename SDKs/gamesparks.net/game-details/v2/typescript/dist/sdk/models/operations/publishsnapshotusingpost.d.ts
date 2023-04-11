import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PublishSnapshotUsingPOSTRequest extends SpeakeasyBase {
    /**
     * apiKey
     */
    apiKey: string;
    /**
     * snapshotId
     */
    snapshotId: string;
}
export declare class PublishSnapshotUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    manageResult?: shared.ManageResult;
    /**
     * json error
     */
    messageModel?: shared.MessageModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
