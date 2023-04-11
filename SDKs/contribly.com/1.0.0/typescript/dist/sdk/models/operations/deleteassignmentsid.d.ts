import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteAssignmentsIdRequest extends SpeakeasyBase {
    /**
     * Id of the assignment to return
     */
    id: string;
}
export declare class DeleteAssignmentsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
