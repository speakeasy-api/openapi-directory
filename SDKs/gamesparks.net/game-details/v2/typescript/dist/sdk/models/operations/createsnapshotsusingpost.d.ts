import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateSnapshotsUsingPOSTRequest extends SpeakeasyBase {
    /**
     * description
     */
    snapshotCreationModel: shared.SnapshotCreationModel;
    /**
     * apiKey
     */
    apiKey: string;
}
export declare class CreateSnapshotsUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * json error
     */
    messageModel?: shared.MessageModel;
    /**
     * Created
     */
    snapshotModel?: shared.SnapshotModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
