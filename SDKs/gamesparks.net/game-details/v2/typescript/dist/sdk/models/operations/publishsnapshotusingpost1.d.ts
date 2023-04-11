import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PublishSnapshotUsingPost1Request extends SpeakeasyBase {
    /**
     * apiKey
     */
    apiKey: string;
    /**
     * snapshotId
     */
    snapshotId: string;
}
export declare class PublishSnapshotUsingPost1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * json error
     */
    messageModel?: shared.MessageModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
