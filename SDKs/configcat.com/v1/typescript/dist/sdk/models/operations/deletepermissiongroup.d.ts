import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeletePermissionGroupRequest extends SpeakeasyBase {
    /**
     * The identifier of the Permission Group.
     */
    permissionGroupId: number;
}
export declare class DeletePermissionGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
