import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RemoveDeletedNodesRequest extends SpeakeasyBase {
    deleteDeletedNodesRequest: shared.DeleteDeletedNodesRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class RemoveDeletedNodesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
