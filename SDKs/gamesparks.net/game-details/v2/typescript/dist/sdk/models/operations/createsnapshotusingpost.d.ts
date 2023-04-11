import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateSnapshotUsingPOSTRequest extends SpeakeasyBase {
    /**
     * model
     */
    snapshotCreationModel: shared.SnapshotCreationModel;
    /**
     * apiKey
     */
    apiKey: string;
}
export declare class CreateSnapshotUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    manageSnapshot?: shared.ManageSnapshot;
    /**
     * json error
     */
    messageModel?: shared.MessageModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
