import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersIdRequest extends SpeakeasyBase {
    /**
     * Id of the user to return
     */
    id: string;
}
export declare class GetUsersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful
     */
    user?: shared.User;
}
