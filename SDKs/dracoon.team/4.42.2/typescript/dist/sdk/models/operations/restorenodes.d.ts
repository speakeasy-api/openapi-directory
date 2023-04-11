import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RestoreNodesRequest extends SpeakeasyBase {
    restoreDeletedNodesRequest: shared.RestoreDeletedNodesRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class RestoreNodesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
