import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostPermissionsRequestBody extends SpeakeasyBase {
    /**
     * Group ID
     */
    groupId?: number;
    /**
     * Folder path
     */
    path?: string;
    /**
     *  Permission type.  Can be `admin`, `full`, `readonly`, `writeonly`, `list`, or `history`
     */
    permission?: string;
    /**
     * Apply to subfolders recursively?
     */
    recursive?: boolean;
    /**
     * User ID.  Provide `username` or `user_id`
     */
    userId?: number;
    /**
     * User username.  Provide `username` or `user_id`
     */
    username?: string;
}
export declare class PostPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The Permissions object.
     */
    permissionEntity?: shared.PermissionEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
