import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The sharing APIs allow you create and manage shares. Shares can be used to send a single file, share a folder, or set up a receive folder and its input form.
 */
export declare class Shares {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a share
     *
     * @remarks
     * Creates a new share object for the given path in your account. We support three types of shares:
     *
     *   - A **shared folder** allows you to let outside parties access a folder in your account (including any files and nested subfolders) using just a link. Shared folders can be restricted; e.g. with an expiration date, password, download-only, etc. Shared folders are 'live'; if someone makes a change to a file in your shared folder, it will be immediately reflected in your account, and vice-versa.
     *   - A file **send** lets you send one or more files via an easy download link. File sends are different than shared folders because file sends are 'point in time' -- the recipient will get the files as you sent them. If you later make a change to the source file, it will not be updated for the recipient.
     *   - A **receive** folder lets you receive files into your account. You can either send users a link, or optionally [embed a customized form](/docs/account/05-file-sharing/05-upload-widget) on your website.
     *
     * **How to send files from your computer using the API**:
     *
     * In order to use the API to send files which are not already stored in your account, you'll need to follow a three-step process:
     *
     * 1. Use the [POST /shares](#operation/addShare) endpoint to set up your send, including password, recipients, expiration, etc. You must include **upload** among the permissions in the `accessMode` and set the `sendingLocalFiles` parameter to **true**. The response that is returned will include a "meta" attribute, which contains an **accessToken** attribute. This new access token is valid only for the send.
     * 2. Use the [POST /resources/upload](#operation/uploadFile) endpoint to upload your files to the send you've created. The "/" path represents the root of the share, not your home directory. **You must send the access token that you received from the first step in the `ev-access-token` header**
     * 3. Use the [POST /shares/complete-send/{id}](#operation/completeDirectSend) endpoint to indicate that you have finished uploading files to your send. This will trigger the system to remove the **upload** permission from the share and send any invitation emails you set up in the first step of the process. **You must send YOUR access token in the `ev-access-token` header, not the temporary access token**
     *
     * **Setting the Share Permissions**
     *
     * Only 5 different combinations of permissions are valid for the `accessMode` object:
     *
     * - **Upload Only**: This allows share visitors to upload to a share but do nothing else to the contained files. To use this mode, set `upload` to **true** and all other permissions to **false**
     * - **Download Only**: This allows share visitors to download files from a share but do nothing else to the contained files. To use this mode, set `download` to **true** and all other permissions to **false**
     * - **Upload and Download**: This allows share visitors to upload new files to the share or download files within the share, but not make any other changes to the share contents. To use this mode, set `upload` and `download` to **true** and set both `modify` and `delete` to **false**
     * - **All but Delete**: This allows share visitors to make any changes to the contents of a share except deleting files. To use this mode, set `upload`, `download`, and `modify` to **true** and set `delete` to **false**
     * - **Full Access**: This allows share visitors to make any changes to the contents of a share. To use this mode, set all 4 permissions `upload`, `download`, `modify`, and `delete` to **true**
     *
     * Any other combination of permissions provided as the `accessMode` will be rejected as a bad request.
     *
     * **Notes:**
     *
     * Authenticated user requires [share permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions).
     */
    addShare(req: operations.AddShareRequest, config?: AxiosRequestConfig): Promise<operations.AddShareResponse>;
    /**
     * Complete send files
     *
     * @remarks
     * After uploading the file(s) to be sent, this method will trigger invitation emails and finish the send files setup. If you are not sending files from your own computer in a send, you will not need this step.
     *
     * **How to send files from your computer using the API**:
     *
     * In order to use the API to send files which are not already stored in your account, you'll need to follow a three-step process:
     *
     * 1. Use the [POST /shares](#operation/addShare) endpoint to set up your send, including password, recipients, expiration, etc. You must include **upload** among the permissions in the `accessMode` and set the `sendingLocalFiles` paramter to **true**. The response that is returned will include a "meta" attribute, which contains an **accessToken** attribute. This new access token is valid only for the send.
     * 2. Use the [POST /resources/upload](#operation/uploadFile) endpoint to upload your files to the send you've created. The "/" path represents the root of the share, not your home directory. **You must send the access token that you received from the first step in the `ev-access-token` header**
     * 3. Use the [POST /shares/complete-send/{id}](#operation/completeDirectSend) endpoint to indicate that you have finished uploading files to your send. This will trigger the system to remove the **upload** permission from the share and send any invitation emails you set up in the first step of the process. **You must send YOUR access token in the `ev-access-token` header, not the temporary access token**
     *
     */
    completeDirectSend(req: operations.CompleteDirectSendRequest, config?: AxiosRequestConfig): Promise<operations.CompleteDirectSendResponse>;
    /**
     * Deactivate a share
     *
     * @remarks
     * Deactivate a share. Deactivating a share does not remove the underlying files for **shared_folder** and **receive** share types; it merely removes the access URL. Deleting a **send** share type does remove the associated files, as files that have been sent are only associated with the share, and aren't stored anywhere else in the account.
     *
     * **Notes:**
     *
     * - You must have [sharing permissons](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to use this.
     * - You must have [admin-level access](/docs/account/04-users/01-admin-users), or you must be the owner of the specified share you wish to delete.
     */
    deleteShareById(req: operations.DeleteShareByIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteShareByIdResponse>;
    /**
     * Get a share
     *
     * @remarks
     * Get the details for a specific share entry. You can use the `include` parameter to also get the details of related records, such as the owning user or the resources involved in the share.
     *
     * **Notes:**
     *
     * - Authenticated user requires [share permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions).
     * - To get share objects with type send, authenticated user's role must be admin or master.
     */
    getShareById(req: operations.GetShareByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetShareByIdResponse>;
    /**
     * Get a list of shares
     *
     * @remarks
     * Get a list of shares that you would have access to view through the web interface. You can limit which results are returned by specifying specific types of shares you wish to view, finding things shared with a specific email address, as well as finding shares for specific folder names.
     *
     *
     * **Notes:**
     *
     * - Authenticated user requires [share permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions).
     * - To get share objects with type send, authenticated user's role must be admin or master.
     */
    listShares(req: operations.ListSharesRequest, config?: AxiosRequestConfig): Promise<operations.ListSharesResponse>;
    /**
     * Update a share
     *
     * @remarks
     * Change the settings on an active share. Any changes made will affect all users that have access to the share.
     *
     * When updating invitees, pass the `recipients` body paramater with the full list of people who should be included on the share. If you resend the list without an existing recipient, they will be removed from the share.
     *
     * **Setting the Share Permissions**
     *
     * Only 5 different combinations of permissions are valid for the `accessMode` object:
     *
     * - **Upload Only**: This allows share visitors to upload to a share but do nothing else to the contained files. To use this mode, set `upload` to **true** and all other permissions to **false**
     * - **Download Only**: This allows share visitors to download files from a share but do nothing else to the contained files. To use this mode, set `download` to **true** and all other permissions to **false**
     * - **Upload and Download**: This allows share visitors to upload new files to the share or download files within the share, but not make any other changes to the share contents. To use this mode, set `upload` and `download` to **true** and set both `modify` and `delete` to **false**
     * - **All but Delete**: This allows share visitors to make any changes to the contents of a share except deleting files. To use this mode, set `upload`, `download`, and `modify` to **true** and set `delete` to **false**
     * - **Full Access**: This allows share visitors to make any changes to the contents of a share. To use this mode, set all 4 permissions `upload`, `download`, `modify`, and `delete` to **true**
     *
     * Any other combination of permissions provided as the `accessMode` will be rejected as a bad request.
     *
     * **Notes:**
     *
     *   - Authenticated user should be the owner of the specified share.
     */
    updateShareById(req: operations.UpdateShareByIdRequest, config?: AxiosRequestConfig): Promise<operations.UpdateShareByIdResponse>;
}
