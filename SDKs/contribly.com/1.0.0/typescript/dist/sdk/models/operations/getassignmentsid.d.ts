import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAssignmentsIdRequest extends SpeakeasyBase {
    /**
     * Id of the assignment to return
     */
    id: string;
}
export declare class GetAssignmentsIdResponse extends SpeakeasyBase {
    /**
     * Assignment found
     */
    assignment?: shared.Assignment;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
