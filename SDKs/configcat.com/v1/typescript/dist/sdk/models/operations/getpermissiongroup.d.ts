import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPermissionGroupRequest extends SpeakeasyBase {
    /**
     * The identifier of the Permission Group.
     */
    permissionGroupId: number;
}
export declare class GetPermissionGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * When everything is ok, the permission group data returned.
     */
    permissionGroupModel?: shared.PermissionGroupModel;
    /**
     * When everything is ok, the permission group data returned.
     */
    permissionGroupModelHaljson?: shared.PermissionGroupModelHaljson;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
