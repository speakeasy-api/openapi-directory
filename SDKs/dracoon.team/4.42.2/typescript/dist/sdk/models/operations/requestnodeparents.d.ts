import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RequestNodeParentsRequest extends SpeakeasyBase {
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * Node ID
     */
    nodeId: number;
}
export declare class RequestNodeParentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    nodeParentList?: shared.NodeParentList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
