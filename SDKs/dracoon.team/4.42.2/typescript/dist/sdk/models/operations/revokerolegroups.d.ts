import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RevokeRoleGroupsRequest extends SpeakeasyBase {
    groupIds: shared.GroupIds;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * Role ID
     */
    roleId: number;
}
export declare class RevokeRoleGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    roleGroupList?: shared.RoleGroupList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
