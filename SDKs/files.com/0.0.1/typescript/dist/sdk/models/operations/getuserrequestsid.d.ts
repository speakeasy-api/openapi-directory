import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUserRequestsIdRequest extends SpeakeasyBase {
    /**
     * User Request ID.
     */
    id: number;
}
export declare class GetUserRequestsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The UserRequests object.
     */
    userRequestEntity?: shared.UserRequestEntity;
}
