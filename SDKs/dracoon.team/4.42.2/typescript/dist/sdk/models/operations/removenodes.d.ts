import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RemoveNodesRequest extends SpeakeasyBase {
    deleteNodesRequest: shared.DeleteNodesRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class RemoveNodesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
