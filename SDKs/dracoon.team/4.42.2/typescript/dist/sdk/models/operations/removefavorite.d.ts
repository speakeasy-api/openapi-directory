import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RemoveFavoriteRequest extends SpeakeasyBase {
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * Node ID
     */
    nodeId: number;
}
export declare class RemoveFavoriteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
