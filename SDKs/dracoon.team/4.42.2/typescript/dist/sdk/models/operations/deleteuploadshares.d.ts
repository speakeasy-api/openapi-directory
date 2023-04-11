import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteUploadSharesRequest extends SpeakeasyBase {
    deleteUploadSharesRequest: shared.DeleteUploadSharesRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class DeleteUploadSharesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
