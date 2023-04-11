import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateDownloadSharesRequest extends SpeakeasyBase {
    updateDownloadSharesBulkRequest: shared.UpdateDownloadSharesBulkRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class UpdateDownloadSharesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
