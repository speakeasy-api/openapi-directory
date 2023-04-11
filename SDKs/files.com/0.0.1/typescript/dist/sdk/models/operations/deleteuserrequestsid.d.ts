import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteUserRequestsIdRequest extends SpeakeasyBase {
    /**
     * User Request ID.
     */
    id: number;
}
export declare class DeleteUserRequestsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
