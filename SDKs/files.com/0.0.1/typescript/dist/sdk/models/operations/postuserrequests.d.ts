import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostUserRequestsRequestBody extends SpeakeasyBase {
    /**
     * Details of the user request
     */
    details: string;
    /**
     * Email of user requested
     */
    email: string;
    /**
     * Name of user requested
     */
    name: string;
}
export declare class PostUserRequestsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The UserRequests object.
     */
    userRequestEntity?: shared.UserRequestEntity;
}
