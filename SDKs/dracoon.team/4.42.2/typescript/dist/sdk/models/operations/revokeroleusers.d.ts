import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RevokeRoleUsersRequest extends SpeakeasyBase {
    userIds: shared.UserIds;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * Role ID
     */
    roleId: number;
}
export declare class RevokeRoleUsersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    roleUserList?: shared.RoleUserList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
