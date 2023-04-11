import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GETSnapshotsUsingGet1Request extends SpeakeasyBase {
    /**
     * apiKey
     */
    apiKey: string;
    /**
     * pageSize
     */
    pageSize?: number;
}
export declare class GETSnapshotsUsingGet1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * json error
     */
    messageModel?: shared.MessageModel;
    /**
     * OK
     */
    snapshotModels?: shared.SnapshotModel[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
