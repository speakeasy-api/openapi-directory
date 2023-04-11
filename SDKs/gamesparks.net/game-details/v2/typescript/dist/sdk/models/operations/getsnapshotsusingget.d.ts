import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GETSnapshotsUsingGETRequest extends SpeakeasyBase {
    /**
     * apiKey
     */
    apiKey: string;
    /**
     * page
     */
    page: number;
    /**
     * pageSize
     */
    pageSize?: number;
}
export declare class GETSnapshotsUsingGETResponse extends SpeakeasyBase {
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
