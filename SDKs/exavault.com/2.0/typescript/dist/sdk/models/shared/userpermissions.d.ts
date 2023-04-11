import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserPermissions extends SpeakeasyBase {
    /**
     * Change (own) password permission flag
     */
    changePassword: boolean;
    /**
     * Delete permission flag
     */
    delete: boolean;
    /**
     * Delete form data permission flag. If true, user can remove data that was submitted for a receive folder. This applies only to data submitted in the receive folder form, not the actual files uploaded.
     */
    deleteFormData: boolean;
    /**
     * Download permission flag
     */
    download: boolean;
    /**
     * View folder contents permission flag
     */
    list: boolean;
    /**
     * Modify permission flag
     */
    modify: boolean;
    /**
     * Notifications permission flag
     */
    notification: boolean;
    /**
     * Sharing permission flag
     */
    share: boolean;
    /**
     * Upload permission flag
     */
    upload: boolean;
    /**
     * Access Form Data permission flag. If true, user can view submissions that have been stored for a receive folder. This includes any data submitted in the receive folder form.
     */
    viewFormData: boolean;
}
