import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateFilesRequest extends SpeakeasyBase {
    updateFilesBulkRequest: shared.UpdateFilesBulkRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class UpdateFilesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
