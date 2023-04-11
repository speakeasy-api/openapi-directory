import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteDownloadSharesRequest extends SpeakeasyBase {
    deleteDownloadSharesRequest: shared.DeleteDownloadSharesRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class DeleteDownloadSharesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
