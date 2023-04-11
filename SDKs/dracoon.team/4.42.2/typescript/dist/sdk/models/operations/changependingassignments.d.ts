import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChangePendingAssignmentsRequest extends SpeakeasyBase {
    pendingAssignmentsRequest: shared.PendingAssignmentsRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class ChangePendingAssignmentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
