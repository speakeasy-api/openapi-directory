import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UsersUpdateStatusSecurity extends SpeakeasyBase {
    key: string;
    project: string;
}
export declare class UsersUpdateStatusRequestBody extends SpeakeasyBase {
    /**
     * User Status code. To activate the user pass 1, to block the user pass 2 and for disabling the user pass 0
     */
    status: number;
}
export declare class UsersUpdateStatusRequest extends SpeakeasyBase {
    requestBody?: UsersUpdateStatusRequestBody;
    /**
     * User unique ID.
     */
    userId: string;
}
export declare class UsersUpdateStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * User
     */
    user?: shared.User;
}
