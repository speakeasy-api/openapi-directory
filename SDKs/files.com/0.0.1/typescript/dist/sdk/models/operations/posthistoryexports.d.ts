import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostHistoryExportsRequestBody extends SpeakeasyBase {
    /**
     * End date/time of export range.
     */
    endAt?: Date;
    /**
     * Filter results by this this action type. Valid values: `create`, `read`, `update`, `destroy`, `move`, `login`, `failedlogin`, `copy`, `user_create`, `user_update`, `user_destroy`, `group_create`, `group_update`, `group_destroy`, `permission_create`, `permission_destroy`, `api_key_create`, `api_key_update`, `api_key_destroy`
     */
    queryAction?: string;
    /**
     * Return results that are file moves with this path as destination.
     */
    queryDestination?: string;
    /**
     * If searching for Histories about login failures, this parameter restricts results to failures of this specific type.  Valid values: `expired_trial`, `account_overdue`, `locked_out`, `ip_mismatch`, `password_mismatch`, `site_mismatch`, `username_not_found`, `none`, `no_ftp_permission`, `no_web_permission`, `no_directory`, `errno_enoent`, `no_sftp_permission`, `no_dav_permission`, `no_restapi_permission`, `key_mismatch`, `region_mismatch`, `expired_access`, `desktop_ip_mismatch`, `desktop_api_key_not_used_quickly_enough`, `disabled`, `country_mismatch`
     */
    queryFailureType?: string;
    /**
     * Return results that are file actions related to the file indicated by this File ID
     */
    queryFileId?: string;
    /**
     * Return results that are file actions related to files or folders inside this folder path.
     */
    queryFolder?: string;
    /**
     * Filter results by this this interface type. Valid values: `web`, `ftp`, `robot`, `jsapi`, `webdesktopapi`, `sftp`, `dav`, `desktop`, `restapi`, `scim`, `office`, `mobile`, `as2`, `inbound_email`, `remote`
     */
    queryInterface?: string;
    /**
     * Filter results by this IP address.
     */
    queryIp?: string;
    /**
     * Return results that are file actions inside the parent folder specified by this folder ID
     */
    queryParentId?: string;
    /**
     * Return results that are file actions related to this path.
     */
    queryPath?: string;
    /**
     * Return results that are file moves originating from this path.
     */
    querySrc?: string;
    /**
     * If searching for Histories about specific objects (such as Users, or API Keys), this paremeter restricts results to objects that match this ID.
     */
    queryTargetId?: string;
    /**
     * If searching for Histories about Users, Groups or other objects with names, this parameter restricts results to objects with this name/username.
     */
    queryTargetName?: string;
    /**
     * If searching for Histories about Permisisons, this parameter restricts results to permissions of this level.
     */
    queryTargetPermission?: string;
    /**
     * If searching for Histories about API keys, this parameter restricts results to API keys with this permission set.
     */
    queryTargetPermissionSet?: string;
    /**
     * If searching for Histories about API keys, this parameter restricts results to API keys associated with this platform.
     */
    queryTargetPlatform?: string;
    /**
     * If searching for Histories about API keys, this parameter restricts results to API keys created by/for this user ID.
     */
    queryTargetUserId?: string;
    /**
     * If searching for Histories about API keys, this parameter restricts results to API keys created by/for this username.
     */
    queryTargetUsername?: string;
    /**
     * Return results that are actions performed by the user indiciated by this User ID
     */
    queryUserId?: string;
    /**
     * Filter results by this username.
     */
    queryUsername?: string;
    /**
     * Start date/time of export range.
     */
    startAt?: Date;
    /**
     * User ID.  Provide a value of `0` to operate the current session's user.
     */
    userId?: number;
}
export declare class PostHistoryExportsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The HistoryExports object.
     */
    historyExportEntity?: shared.HistoryExportEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
