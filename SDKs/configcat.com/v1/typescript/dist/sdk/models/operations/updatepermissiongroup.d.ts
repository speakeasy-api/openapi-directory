import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdatePermissionGroupRequest extends SpeakeasyBase {
    updatePermissionGroupRequest: shared.UpdatePermissionGroupRequest;
    /**
     * The identifier of the Permission Group.
     */
    permissionGroupId: number;
}
export declare class UpdatePermissionGroupResponse extends SpeakeasyBase {
    contentType: string;
    permissionGroupModel?: shared.PermissionGroupModel;
    permissionGroupModelHaljson?: shared.PermissionGroupModelHaljson;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
