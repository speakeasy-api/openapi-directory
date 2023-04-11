import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * File system objects (rooms, folders, files)
 */
export declare class Nodes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Mark a node (room, folder or file) as favorite
     *
     * @remarks
     * ### Description:
     * Marks a node (room, folder or file) as favorite.
     *
     * ### Precondition:
     * Authenticated user is allowed to <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128065; see</span> the node (i.e. `isBrowsable = true`).
     *
     * ### Postcondition:
     * A node gets marked as favorite.
     *
     * ### Further Information:
     * None.
     */
    addFavorite(req: operations.AddFavoriteRequest, config?: AxiosRequestConfig): Promise<operations.AddFavoriteResponse>;
    /**
     * Add guest users to a room
     *
     * @remarks
     * ### Description:
     * Add guest users to a room
     *
     * ### Precondition:
     * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>. To add new members, the user needs the right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; non-members add</span>, which is included in any role.
     * <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Guest User Policy</span> needs to be enabled.
     *
     *
     * ### Postcondition:
     * New or existing Guest-Users now have guest-permissions for this room
     *
     * ### Further Information:
     * Batch function.
     */
    addRoomGuestUsers(req: operations.AddRoomGuestUsersRequest, config?: AxiosRequestConfig): Promise<operations.AddRoomGuestUsersResponse>;
    /**
     * Cancel file upload
     *
     * @remarks
     * ### Description:
     * Cancel a (S3) file upload and destroy the upload channel.
     *
     * ### Precondition:
     * An upload channel has been created and user has to be the creator of the upload channel.
     *
     * ### Postcondition:
     * The upload channel is removed and all temporary uploaded data is purged.
     *
     * ### Further Information:
     * It is recommended to notify the API about cancelled uploads if possible.
     */
    cancelFileUpload(req: operations.CancelFileUploadRequest, config?: AxiosRequestConfig): Promise<operations.CancelFileUploadResponse>;
    /**
     * Handle user-room assignments per group
     *
     * @remarks
     * ### Description:
     * Handles a list of user-room assignments by groups that have **NOT** been approved yet
     * **WAITING** or **DENIED** assignments can be **ACCEPTED**.
     *
     * ### Precondition:
     * None.
     *
     * ### Postcondition:
     * User-room assignment is approved and the user gets access to the group.
     *
     * ### Further Information:
     * Room administrators should **SHOULD** handle pending assignments to provide access to rooms for other users.
     */
    changePendingAssignments(req: operations.ChangePendingAssignmentsRequest, config?: AxiosRequestConfig): Promise<operations.ChangePendingAssignmentsResponse>;
    /**
     * Complete file upload
     *
     * @remarks
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.9.0</h3>
     *
     * ### Use `uploads` API
     *
     * ### Description:
     * Finishes an upload and closes the corresponding upload channel.
     *
     * ### Precondition:
     * An upload channel has been created and data has been transmitted.
     *
     * ### Postcondition:
     * The upload is finished and the temporary file is moved to the productive environment.
     *
     * ### Further Information:
     * The provided file name might be changed in accordance with the resolution strategy:
     * * **autorename**: changes the file name and adds a number to avoid conflicts.
     * * **overwrite**: deletes any old file with the same file name.
     * * **fail**: returns an error; in this case, another `PUT` request with a different file name may be sent.
     *
     * Please ensure that all chunks have been transferred correctly before finishing the upload.
     * Download share id (if exists) gets changed if:
     * - node with the same name exists in the target container
     * - `resolutionStrategy` is `overwrite`
     * - `keepShareLinks` is `true`
     *
     * ### Node naming convention:
     * * Node (room, folder, file) names are limited to **150** characters.
     * * Illegal names:
     * `'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
     * * Illegal characters in names:
     * `'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `
     */
    completeFileUpload(req: operations.CompleteFileUploadRequest, config?: AxiosRequestConfig): Promise<operations.CompleteFileUploadResponse>;
    /**
     * Complete S3 file upload
     *
     * @remarks
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.15.0</h3>
     *
     * ### Description:
     * Finishes a S3 file upload and closes the corresponding upload channel.
     *
     * ### Precondition:
     * An upload channel has been created, data has been transmitted and user has to be the creator of the upload channel
     *
     * ### Postcondition:
     * Upload channel is closed. S3 multipart upload request is completed.
     *
     * ### Further Information:
     * Download share id (if exists) gets changed if:
     * - node with the same name exists in the target container
     * - `resolutionStrategy` is `overwrite`
     * - `keepShareLinks` is `true`
     */
    completeS3FileUpload(req: operations.CompleteS3FileUploadRequest, config?: AxiosRequestConfig): Promise<operations.CompleteS3FileUploadResponse>;
    /**
     * Configure room
     *
     * @remarks
     * ### Description:
     * Configure a room.
     *
     * ### Precondition:
     * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.
     *
     * ### Postcondition:
     * Room's configuration is changed.
     *
     * ### Further Information:
     * Provided (or default) classification is taken from room when file gets uploaded without any classification.
     *
     * To set `adminIds` or `adminGroupIds` the `inheritPermissions` value has to be `false`. Otherwise use:
     * * `PUT /nodes/rooms/{room_id}/groups`
     * * `PUT /nodes/rooms/{room_id}/users `
     *
     * APIs.
     */
    configureRoom(req: operations.ConfigureRoomRequest, config?: AxiosRequestConfig): Promise<operations.ConfigureRoomResponse>;
    /**
     * Copy node(s)
     *
     * @remarks
     * ### Description:
     * Copies nodes (folder, file) to another parent.
     *
     * ### Precondition:
     * Authenticated user with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in the source parent and <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; create</span> permissions in the target parent node.
     *
     * ### Postcondition:
     * Nodes are copied to target parent.
     *
     * ### Further Information:
     * Nodes **MUST** be in same source parent.
     * **Rooms **CANNOT** be copied.**
     *
     * Download share id (if exists) gets changed if:
     * - node with the same name exists in the target container
     * - `resolutionStrategy` is `overwrite`
     * - `keepShareLinks` is `true`
     *
     * ### Node naming convention:
     * * Node (room, folder, file) names are limited to **150** characters.
     * * Illegal names:
     * `'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
     * * Illegal characters in names:
     * `'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `
     *
     */
    copyNodes(req: operations.CopyNodesRequest, config?: AxiosRequestConfig): Promise<operations.CopyNodesResponse>;
    /**
     * Create key pair and preserve copy of old private key
     *
     * @remarks
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
     *
     * ### Description:
     * Create room rescue key pair and preserve copy of old private key.
     *
     * ### Precondition:
     * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.
     *
     * ### Postcondition:
     * Room rescue key pair is created.
     * Copy of old private key is preserved.
     *
     * ### Further Information:
     * You can submit your old private key, encrypted with your current password.
     * This allows migrating file keys encrypted with your old key pair to the new one.
     */
    createAndPreserveRoomRescueKeyPair(req: operations.CreateAndPreserveRoomRescueKeyPairRequest, config?: AxiosRequestConfig): Promise<operations.CreateAndPreserveRoomRescueKeyPairResponse>;
    /**
     * Create new file upload channel
     *
     * @remarks
     * ### Description:
     * This endpoint creates a new upload channel which is the first step in any file upload workflow.
     *
     * ### Precondition:
     * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; create</span> permissions in the parent container (room or folder).
     *
     * ### Postcondition:
     * A new upload channel for a file is created.
     * Its ID and an upload token are returned.
     *
     * ### Further Information:
     * The upload ID is used for uploads with `X-Sds-Auth-Token` header, the upload token can be used for uploads without authentication header.
     *
     * Please provide the size of the intended upload so that the quota can be checked in advanced and no data is transferred unnecessarily.
     *
     * Notes are limited to **255** characters.
     *
     * ### Node naming convention:
     * * Node (room, folder, file) names are limited to **150** characters.
     * * Illegal names:
     * `'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
     * * Illegal characters in names:
     * `'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `
     *
     */
    createFileUploadChannel(req: operations.CreateFileUploadChannelRequest, config?: AxiosRequestConfig): Promise<operations.CreateFileUploadChannelResponse>;
    /**
     * Create new folder
     *
     * @remarks
     * ### Description:
     * Create a new folder.
     *
     * ### Precondition:
     * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; create</span> permissions in current room.
     *
     * ### Postcondition:
     * New folder is created.
     *
     * ### Further Information:
     * Folders **CANNOT** be created on top level (without parent element).
     * Notes are limited to **255** characters.
     *
     * ### Node naming convention:
     * * Node (room, folder, file) names are limited to **150** characters.
     * * Illegal names:
     * `'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
     * * Illegal characters in names:
     * `'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `
     *
     */
    createFolder(req: operations.CreateFolderRequest, config?: AxiosRequestConfig): Promise<operations.CreateFolderResponse>;
    /**
     * Create node comment
     *
     * @remarks
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.10.0</h3>
     *
     * ### Description:
     * Create a comment for a specific node.
     *
     * ### Precondition:
     * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions on the node.
     *
     * ### Postcondition:
     * Comment is created.
     *
     * ### Further Information:
     * Maximum allowed text length: **65535** characters.
     */
    createNodeComment(req: operations.CreateNodeCommentRequest, config?: AxiosRequestConfig): Promise<operations.CreateNodeCommentResponse>;
    /**
     * Create new room
     *
     * @remarks
     * ### Description:
     * Creates a new room at the provided parent node.
     * Creation of top level rooms provided.
     *
     * ### Precondition:
     * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage</span> permissions in the parent room.
     *
     * ### Postcondition:
     * A new room is created.
     *
     * ### Further Information:
     * Rooms may only have other rooms as parent.
     * Rooms on top level do **NOT** have any parent.
     * Rooms may have rooms as children on n hierarchy levels.
     * If permission inheritance is disabled, there **MUST** be at least one admin user / group (with neither the group nor the user having an expiration date).
     *
     * Notes are limited to **255** characters.
     *
     * Provided (or default) classification is taken from room when file gets uploaded without any classification.
     *
     * ### Node naming convention:
     * * Node (room, folder, file) names are limited to **150** characters.
     * * Illegal names:
     * `'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
     * * Illegal characters in names:
     * `'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `
     */
    createRoom(req: operations.CreateRoomRequest, config?: AxiosRequestConfig): Promise<operations.CreateRoomResponse>;
    /**
     * Download files / folders as ZIP archive
     *
     * @remarks
     * ### Description:
     * Download multiple files in a ZIP archive.
     *
     * ### Precondition:
     * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in auth parent room.
     *
     * ### Postcondition:
     * Stream is returned.
     *
     * ### Further Information:
     * None.
     */
    downloadZipArchive(req: operations.DownloadZipArchiveRequest, config?: AxiosRequestConfig): Promise<operations.DownloadZipArchiveResponse>;
    /**
     * Empty recycle bin
     *
     * @remarks
     * ### Description:
     * Empty a recycle bin.
     *
     * ### Precondition:
     * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; delete recycle bin</span> permissions in parent room.
     *
     * ### Postcondition:
     * All files in the recycle bin are permanently removed.
     *
     * ### Further Information:
     * Actually removes the previously deleted files from the system.
     * **This action is irreversible.**
     */
    emptyDeletedNodes(req: operations.EmptyDeletedNodesRequest, config?: AxiosRequestConfig): Promise<operations.EmptyDeletedNodesResponse>;
    /**
     * Encrypt room
     *
     * @remarks
     * ### Description:
     * Activates the client-side encryption for a room.
     *
     * ### Precondition:
     * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.
     *
     * ### Postcondition:
     * Encryption of room is activated.
     *
     * ### Further Information:
     * Only empty rooms at the top level may be encrypted.
     * This endpoint may also be used to disable encryption of an empty room.
     */
    encryptRoom(req: operations.EncryptRoomRequest, config?: AxiosRequestConfig): Promise<operations.EncryptRoomResponse>;
    /**
     * Generate download URL
     *
     * @remarks
     * ### Description:
     * Create a download URL to retrieve a file without `X-Sds-Auth-Token` Header.
     *
     * ### Precondition:
     * User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in parent room.
     *
     * ### Postcondition:
     * Download token is generated and returned.
     *
     * ### Further Information:
     * The token is necessary to access `downloads` ressources.
     */
    generateDownloadUrl(req: operations.GenerateDownloadUrlRequest, config?: AxiosRequestConfig): Promise<operations.GenerateDownloadUrlResponse>;
    /**
     * Generate download URL for ZIP download
     *
     * @remarks
     * ### Description:
     * Create a download URL to retrieve several files in one ZIP archive.
     *
     * ### Precondition:
     * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in parent room.
     *
     * ### Postcondition:
     * Download URL is generated and returned.
     *
     * ### Further Information:
     * The token is necessary to access `downloads` resources.
     * ZIP download is only available for files and folders.
     */
    generateDownloadUrlForZipArchive(req: operations.GenerateDownloadUrlForZipArchiveRequest, config?: AxiosRequestConfig): Promise<operations.GenerateDownloadUrlForZipArchiveResponse>;
    /**
     * Generate presigned URLs for S3 file upload
     *
     * @remarks
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.15.0</h3>
     *
     * ### Description:
     * Generate presigned URLs for S3 file upload.
     *
     * ### Precondition:
     * An upload channel has been created and user has to be the creator of the upload channel.
     *
     * ### Postcondition:
     * List of presigned URLs is returned.
     *
     * ### Further Information:
     * The size for each part must be >= 5 MB, except for the last part.
     * The part number of the first part in S3 is 1 (not 0).
     * Use HTTP method `PUT` for uploading bytes via presigned URL.
     */
    generatePresignedUrlsFiles(req: operations.GeneratePresignedUrlsFilesRequest, config?: AxiosRequestConfig): Promise<operations.GeneratePresignedUrlsFilesResponse>;
    /**
     * Assign or unassign webhooks to room
     *
     * @remarks
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>
     *
     * ### Description:
     * Handle room webhook assignments.
     *
     * ### Precondition:
     * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.
     *
     * ### Postcondition:
     * List of webhooks is returned.
     *
     * ### Further Information:
     * None.
     *
     * ### Available event types:
     *
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | Name | Description | Scope |
     * | :--- | :--- | :--- |
     * | **`downloadshare.created`** | Triggered when a new download share is created in affected room | Node Webhook |
     * | **`downloadshare.deleted`** | Triggered when a download share is deleted in affected room | Node Webhook |
     * | **`downloadshare.used`** | Triggered when a download share is utilized in affected room | Node Webhook |
     * | **`uploadshare.created`** | Triggered when a new upload share is created in affected room | Node Webhook |
     * | **`uploadshare.deleted`** | Triggered when a upload share is deleted in affected room | Node Webhook |
     * | **`uploadshare.used`** | Triggered when a new file is uploaded via the upload share in affected room | Node Webhook |
     * | **`file.created`** | Triggered when a new file is uploaded in affected room | Node Webhook |
     * | **`folder.created`** | Triggered when a new folder is created in affected room | Node Webhook |
     * | **`room.created`** | Triggered when a new room is created (in affected room) | Node Webhook |
     * | **`file.deleted`** | Triggered when a file is deleted in affected room | Node Webhook |
     * | **`folder.deleted`** | Triggered when a folder is deleted in affected room | Node Webhook |
     * | **`room.deleted`** | Triggered when a room is deleted in affected room | Node Webhook |
     *
     * </details>
     */
    handleRoomWebhookAssignments(req: operations.HandleRoomWebhookAssignmentsRequest, config?: AxiosRequestConfig): Promise<operations.HandleRoomWebhookAssignmentsResponse>;
    /**
     * Move node(s)
     *
     * @remarks
     * ### Description:
     * Moves nodes (folder, file) to another parent.
     *
     * ### Precondition:
     * Authenticated user with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> and <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; delete</span> permissions in the source parent and <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; create</span> permissions in the target parent node.
     *
     * ### Postcondition:
     * Nodes are moved to target parent.
     *
     * ### Further Information:
     * Nodes **MUST** be in same source parent.
     * **Rooms **CANNOT** be moved.**
     *
     * Download share id (if exists) gets changed if:
     * - node with the same name exists in the target container
     * - `resolutionStrategy` is `overwrite`
     * - `keepShareLinks` is `true`
     *
     * ### Node naming convention:
     * * Node (room, folder, file) names are limited to **150** characters.
     * * Illegal names:
     * `'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
     * * Illegal characters in names:
     * `'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `
     *
     */
    moveNodes(req: operations.MoveNodesRequest, config?: AxiosRequestConfig): Promise<operations.MoveNodesResponse>;
    /**
     * Remove nodes from recycle bin
     *
     * @remarks
     * ### Description:
     * Permanently remove a list of nodes from the recycle bin.
     *
     * ### Precondition:
     * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; delete recycle bin</span> permissions in parent room.
     *
     * ### Postcondition:
     * All provided nodes are removed.
     *
     * ### Further Information:
     * The removal of deleted nodes from the recycle bin is irreversible.
     */
    removeDeletedNodes(req: operations.RemoveDeletedNodesRequest, config?: AxiosRequestConfig): Promise<operations.RemoveDeletedNodesResponse>;
    /**
     * Unmark a node (room, folder or file) as favorite
     *
     * @remarks
     * ### Description:
     * Unmarks a node (room, folder or file) as favorite.
     *
     * ### Precondition:
     * Authenticated user is allowed to <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128065; see</span> the node (i.e. `isBrowsable = true`).
     *
     * ### Postcondition:
     * A node gets unmarked as favorite.
     *
     * ### Further Information:
     * None.
     */
    removeFavorite(req: operations.RemoveFavoriteRequest, config?: AxiosRequestConfig): Promise<operations.RemoveFavoriteResponse>;
    /**
     * Remove node
     *
     * @remarks
     * ### Description:
     * Delete node (room, folder or file).
     *
     * ### Precondition:
     * Authenticated user with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; delete</span> permissions on supplied nodes (for folders or files) or on superordinated node (for rooms).
     *
     * ### Postcondition:
     * Node gets deleted.
     *
     * ### Further Information:
     * None.
     */
    removeNode(req: operations.RemoveNodeRequest, config?: AxiosRequestConfig): Promise<operations.RemoveNodeResponse>;
    /**
     * Remove node comment
     *
     * @remarks
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.10.0</h3>
     *
     * ### Description:
     * Delete an existing comment for a specific node.
     *
     * ### Precondition:
     * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions on the node and is the creator of the comment **OR** <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span> in auth parent room.
     *
     * ### Postcondition:
     * Comment is deleted.
     *
     * ### Further Information:
     * None.
     */
    removeNodeComment(req: operations.RemoveNodeCommentRequest, config?: AxiosRequestConfig): Promise<operations.RemoveNodeCommentResponse>;
    /**
     * Remove nodes
     *
     * @remarks
     * ### Description:
     * Delete nodes (room, folder or file).
     *
     * ### Precondition:
     * Authenticated user with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; delete</span> permissions on supplied nodes (for folders or files) or on superordinated node (for rooms).
     *
     * ### Postcondition:
     * Nodes are deleted.
     *
     * ### Further Information:
     * Nodes **MUST** be in same parent.
     */
    removeNodes(req: operations.RemoveNodesRequest, config?: AxiosRequestConfig): Promise<operations.RemoveNodesResponse>;
    /**
     * Remove rooms's rescue key pair
     *
     * @remarks
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
     *
     * ### Description:
     * Delete room rescue key pair.
     *
     * ### Precondition:
     * Authenticated user.
     *
     * ### Postcondition:
     * Key pair is removed (cf. further information below).
     *
     * ### Further Information:
     * Please set a new room rescue key pair first and re-encrypt file keys with it.
     * If no version is set, deleted key pair with lowest preference value.
     * Although, `version` **SHOULD** be set.
     *
     */
    removeRoomRescueKeyPair(req: operations.RemoveRoomRescueKeyPairRequest, config?: AxiosRequestConfig): Promise<operations.RemoveRoomRescueKeyPairResponse>;
    /**
     * Request deleted node
     *
     * @remarks
     * ### Description:
     * Get metadata of a deleted node.
     *
     * ### Precondition:
     * User can access parent room and has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read recycle bin</span> permissions.
     *
     * ### Postcondition:
     * Requested deleted node is returned.
     *
     * ### Further Information:
     * None.
     */
    requestDeletedNode(req: operations.RequestDeletedNodeRequest, config?: AxiosRequestConfig): Promise<operations.RequestDeletedNodeResponse>;
    /**
     * Request deleted versions of nodes
     *
     * @remarks
     * ### Description:
     * Retrieve all deleted versions of a node.
     *
     * ### Precondition:
     * User can access parent room and has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read recycle bin</span> permissions.
     *
     * ### Postcondition:
     * List of deleted versions of a node is returned.
     *
     * ### Further Information:
     * The node is identified by three parameters:
     * * parent ID
     * * name
     * * type (file, folder).
     *
     * Sort string syntax: `FIELD_NAME:ORDER`
     * `ORDER` can be `asc` or `desc`.
     * Multiple sort criteria are possible.
     * Fields are connected via logical conjunction **AND**.
     *
     * <details style="padding-left: 10px">
     * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
     *
     * `expireAt:desc|size:asc`
     * Sort by `expireAt` descending **AND** `size` ascending.
     *
     * </details>
     *
     * ### Sorting options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Description |
     * | :--- | :--- |
     * | `expireAt` | Expiration date |
     * | `accessedAt` | Last access date |
     * | `size` | Node size |
     * | `classification` | Classification ID:<ul><li>1 - public</li><li>2 - internal</li><li>3 - confidential</li><li>4 - strictly confidential</li></ul> |
     * | `createdAt` | Creation date |
     * | `createdBy` | Creator first name, last name |
     * | `updatedAt` | Last modification date |
     * | `updatedBy` | Last modifier first name, last name |
     * | `deletedAt` | Deleted date |
     * | `deletedBy` | Deleter first name, last name |
     *
     * </details>
     */
    requestDeletedNodeVersions(req: operations.RequestDeletedNodeVersionsRequest, config?: AxiosRequestConfig): Promise<operations.RequestDeletedNodeVersionsResponse>;
    /**
     * Request list of deleted nodes
     *
     * @remarks
     * ### Description:
     * Retrieve a list of deleted nodes in a recycle bin.
     *
     * ### Precondition:
     * User can access parent room and has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read recycle bin</span> permissions.
     *
     * ### Postcondition:
     * List of deleted nodes is returned.
     *
     * ### Further Information:
     * Only room IDs are accepted as parent ID since only rooms may have a recycle bin.
     *
     * ### Filtering:
     * All filter fields are connected via logical conjunction (**AND**)
     * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
     *
     * <details style="padding-left: 10px">
     * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
     *
     * `type:eq:file:folder|name:cn:searchString_1|parentPath:cn:searchString_2`
     * Get deleted nodes where type equals (`file` **OR** `folder`) **AND** deleted node name containing `searchString_1` **AND** deleted node parent path containing `searchString 2`.
     *
     * </details>
     *
     * ### Filtering options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
     * | :--- | :--- | :--- | :--- | :--- |
     * | `type` | Node type filter | `eq` | Node type equals value(s).<br>Multiple values are allowed and will be connected via logical disjunction (**OR**).<br>e.g. `type:eq:folder:file` | <ul><li>`folder`</li><li>`file`</li></ul> |
     * | `name` | Node name filter | `cn` | Node name contains value. | `search String` |
     * | `parentPath` | Parent path filter | `cn` | Parent path contains value. | `search String` |
     * | `timestampCreation` | Creation timestamp filter | `ge, le` | Creation timestamp is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `timestampCreation:ge:2016-12-31`&#124;<br>`timestampCreation:le:2018-01-01` | `Date (yyyy-MM-dd)` |
     * | `timestampModification` | Modification timestamp filter | `ge, le` | Modification timestamp is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `timestampModification:ge:2016-12-31T23:00:00.123`&#124;<br>`timestampModification:le:2018-01-01T11:00:00.540` | `Date (yyyy-MM-dd)` |
     *
     * </details>
     *
     * ---
     *
     * ### Sorting:
     * Sort string syntax: `FIELD_NAME:ORDER`
     * `ORDER` can be `asc` or `desc`.
     * Multiple sort criteria are possible.
     * Fields are connected via logical conjunction **AND**.
     * Nodes are sorted by type first, then by sent sort string.
     *
     * <details style="padding-left: 10px">
     * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
     *
     * `name:desc|timestampCreation:asc`
     * Sort by `name` descending **AND** `timestampCreation` ascending.
     *
     * </details>
     *
     * ### Sorting options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Description |
     * | :--- | :--- |
     * | `name` | Node name |
     * | `cntVersions` | Number of deleted versions of this file |
     * | `firstDeletedAt` | First deleted version |
     * | `lastDeletedAt` | Last deleted version |
     * | `parentPath` | Parent path of deleted node |
     * | `timestampCreation` | Creation timestamp |
     * | `timestampModification` | Modification timestamp |
     *
     * </details>
     */
    requestDeletedNodesSummary(req: operations.RequestDeletedNodesSummaryRequest, config?: AxiosRequestConfig): Promise<operations.RequestDeletedNodesSummaryResponse>;
    /**
     * Request list of file versions
     *
     * @remarks
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.37.0</h3>
     *
     * ### Description:
     * Request a list of file versions. Both nodes and deleted nodes are included, depending on the user's permissions.
     *
     * ### Precondition:
     * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read/read recycle bin</span> permissions in parent room.
     *
     * ### Postcondition:
     * List of file versions is returned.
     *
     * ### Further Information:
     * Maximum number of file versions is 500. The list is sorted by ID DESC.
     *
     */
    requestFileVersionList(req: operations.RequestFileVersionListRequest, config?: AxiosRequestConfig): Promise<operations.RequestFileVersionListResponse>;
    /**
     * Request list of webhooks that are assigned or can be assigned to this room
     *
     * @remarks
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>
     *
     * ### Description:
     * Get a list of webhooks for the room scope with their assignment status.
     *
     * ### Precondition:
     * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.
     *
     * ### Postcondition:
     * List of webhooks is returned.
     *
     * ### Further Information:
     *
     * ### Filtering:
     * All filter fields are connected via logical conjunction (**AND**)
     * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
     *
     * <details style="padding-left: 10px">
     * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
     *
     * `isAssigned:eq:true`
     * Get a list of assigned webhooks to the room.
     *
     * </details>
     *
     * ### Filtering options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
     * | :--- | :--- | :--- | :--- | :--- |
     * | **`isAssigned`** | Assigned/unassigned webhooks filter | `eq` |  | `true or false` |
     *
     * </details>
     */
    requestListOfWebhooksForRoom(req: operations.RequestListOfWebhooksForRoomRequest, config?: AxiosRequestConfig): Promise<operations.RequestListOfWebhooksForRoomResponse>;
    /**
     * Request files without user's file key
     *
     * @remarks
     * ### Description:
     * Requests a list of missing file keys that may be generated by the current user.
     *
     * ### Precondition:
     * User has a key pair.
     * Only returns users that owns one of the following permissions: <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span>
     *
     * ### Postcondition:
     * None.
     *
     * ### Further Information:
     * Clients **SHOULD** regularly request missing file keys to provide access to files for other users.
     * The returned list is ordered by priority (emergency passwords / rescue keys are returned first).
     * There is an enforced limit of **100** items per request.
     * A total value greater than limit signals that there are more entries but does not necessarily reflect the precise
     * number of total items.
     *
     */
    requestMissingFileKeys(req: operations.RequestMissingFileKeysRequest, config?: AxiosRequestConfig): Promise<operations.RequestMissingFileKeysResponse>;
    /**
     * Request node
     *
     * @remarks
     * ### Description:
     * Get node (room, folder or file).
     *
     * ### Precondition:
     * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in auth parent room.
     *
     * ### Postcondition:
     * Requested node is returned.
     *
     * ### Further Information:
     * None.
     */
    requestNode(req: operations.RequestNodeRequest, config?: AxiosRequestConfig): Promise<operations.RequestNodeResponse>;
    /**
     * Request list of node comments
     *
     * @remarks
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.10.0</h3>
     *
     * ### Description:
     * Get comments for a specific node.
     *
     * ### Precondition:
     * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions on the node.
     *
     * ### Postcondition:
     * List with comments (sorted by `createdAt` timestamp) is returned.
     *
     * ### Further Information:
     * An empty list is returned if no comments were found.
     * Output is limited to **500** entries.
     * For more results please use filter criteria and paging (`offset` + `limit`).
     *
     */
    requestNodeComments(req: operations.RequestNodeCommentsRequest, config?: AxiosRequestConfig): Promise<operations.RequestNodeCommentsResponse>;
    /**
     * Request list of parent nodes
     *
     * @remarks
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.10.0</h3>
     *
     * ### Description:
     * Requests a list of node ancestors, sorted from root node to the node's direct parent node.
     *
     * ### Precondition:
     * User is allowed to browse through the node tree until the requested node.
     *
     * ### Postcondition:
     * List of parent nodes is returned.
     *
     * ### Further Information:
     * None.
     */
    requestNodeParents(req: operations.RequestNodeParentsRequest, config?: AxiosRequestConfig): Promise<operations.RequestNodeParentsResponse>;
    /**
     * Request list of nodes
     *
     * @remarks
     * ### Description:
     * Provides a hierarchical list of file system nodes (rooms, folders or files) of a given parent that are accessible by the current user.
     *
     * ### Precondition:
     * Authenticated user.
     *
     * ### Postcondition:
     * List of nodes is returned.
     *
     * ### Further Information:
     * `EncryptionInfo` is **NOT** provided.
     *
     * ### Filtering:
     * All filter fields are connected via logical conjunction (**AND**)
     * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
     *
     * <details style="padding-left: 10px">
     * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
     *
     * `type:eq:room:folder|perm:eq:read`
     * Get nodes where type equals (`room` **OR** `folder`) **AND** user has `read` permissions.
     *
     * </details>
     *
     * ### Filtering options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
     * | :--- | :--- | :--- | :--- | :--- |
     * | `type` | Node type filter | `eq` | Node type equals value.<br>Multiple values are allowed and will be connected via logical disjunction (**OR**).<br>e.g. `type:eq:room:folder` | <ul><li>`room`</li><li>`folder`</li><li>`file`</li></ul> |
     * | `perm` | Permission filter | `eq` | Permission equals value.<br>Multiple values are allowed and will be connected via logical disjunction (**OR**).<br>e.g. `perm:eq:read:create:delete` | <ul><li>`manage`</li><li>`read`</li><li>`change`</li><li>`create`</li><li>`delete`</li><li>`manageDownloadShare`</li><li>`manageUploadShare`</li><li>`canReadRecycleBin`</li><li>`canRestoreRecycleBin`</li><li>`canDeleteRecycleBin`</li></ul> |
     * | `childPerm` | Same as `perm`, but less restrictive (applies to child nodes only).<br>Child nodes of the parent node which do not meet the filter condition<br>are **NOT** returned. | `eq` | cf. `perm` | cf. `perm` |
     * | `name` | Node name filter | `cn, eq` | Node name contains / equals value. | `search String` |
     * | `encrypted` | Node encryption status filter | `eq` |  | `true or false` |
     * | `branchVersion` | Node branch version filter | `ge, le` | Branch version is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `branchVersion:ge:1423280937404`&#124;`branchVersion:le:1523280937404` | `version number` |
     * | `timestampCreation` | Creation timestamp filter | `ge, le` | Creation timestamp is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `timestampCreation:ge:2016-12-31T23:00:00.123`&#124;<br>`timestampCreation:le:2018-01-01T11:00:00.540` | `Date (yyyy-MM-dd)` |
     * | `timestampModification` | Modification timestamp filter | `ge, le` | Modification timestamp is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `timestampModification:ge:2016-12-31T23:00:00.123`&#124;<br>`timestampModification:le:2018-01-01T11:00:00.540` | `Date (yyyy-MM-dd)` |
     * | `referenceId`           | Reference ID filter               | `eq` | Reference ID equals value.   | `Integer ` |
     * </details>
     *
     * ---
     *
     * ### Sorting:
     * Sort string syntax: `FIELD_NAME:ORDER`
     * `ORDER` can be `asc` or `desc`.
     * Multiple sort criteria are possible.
     * Fields are connected via logical conjunction **AND**.
     * Nodes are sorted by type first, then by sent sort string.
     *
     * <details style="padding-left: 10px">
     * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
     *
     * `name:desc|fileType:asc`
     * Sort by `name` descending **AND** `fileType` ascending.
     *
     * </details>
     *
     * ### Sorting options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Description |
     * | :--- | :--- |
     * | `name` | Node name |
     * | `createdAt` | Creation date |
     * | `createdBy` | Creator first name, last name |
     * | `updatedAt` | Last modification date |
     * | `updatedBy` | Last modifier first name, last name |
     * | `fileType` | File type (extension) |
     * | `classification` | Classification ID:<ul><li>1 - public</li><li>2 - internal</li><li>3 - confidential</li><li>4 - strictly confidential</li></ul> |
     * | `size` | Node size |
     * | `cntDeletedVersions` | Number of deleted versions of this file / folder (**NOT** recursive; for files and folders only) |
     * | `timestampCreation` | Creation timestamp |
     * | `timestampModification` | Modification timestamp |
     *
     * </details>
     *
     * ### Deprecated sorting options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Description |
     * | :--- | :--- |
     * | <del>`cntChildren`</del> | Number of direct children (**NOT** recursive; for rooms and folders only) |
     *
     * </details>
     */
    requestNodes(req: operations.RequestNodesRequest, config?: AxiosRequestConfig): Promise<operations.RequestNodesResponse>;
    /**
     * Request user-room assignments per group
     *
     * @remarks
     * ### Description:
     * Requests a list of user-room assignments by groups that have **NOT** been approved yet
     * These can have the state:
     * * **WAITING**
     * * **DENIED**
     * * **ACCEPTED**
     *
     * **ACCEPTED** assignments are already removed from the list.
     *
     * ### Precondition:
     * None.
     *
     * ### Postcondition:
     * List of user-room assignments is returned.
     *
     * ### Further Information:
     * Room administrators **SHOULD** regularly request pending assingments to provide access to rooms for other users.
     *
     * ### Filtering:
     * All filter fields are connected via logical conjunction (**AND**)
     * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`
     *
     * <details style="padding-left: 10px">
     * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
     *
     * `state:eq:WAITING`
     * Filter assignments by state `WAITING`.
     *
     * </details>
     *
     * ### Filtering options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
     * | :--- | :--- | :--- | :--- | :--- |
     * | `userId` | User ID filter | `eq` | User ID equals value. | `positive Integer` |
     * | `groupId` | Group ID filter | `eq` | Group ID equals value. | `positive Integer` |
     * | `roomId` | Room ID filter | `eq` | Room ID equals value. | `positive Integer` |
     * | `state` | Assignment state | `eq` | Assignment state equals value. | `WAITING or DENIED` |
     *
     * </details>
     *
     * ---
     *
     * ### Sorting:
     * Sort string syntax: `FIELD_NAME:ORDER`
     * `ORDER` can be `asc` or `desc`.
     * Multiple sort criteria are possible.
     * Fields are connected via logical conjunction **AND**.
     *
     * <details style="padding-left: 10px">
     * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
     *
     * `userId:desc|state:asc`
     * Sort by `userId` descending **AND** `state` ascending.
     *
     * </details>
     *
     * ### Sorting options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Description |
     * | :--- | :--- |
     * | `userId` | User ID |
     * | `groupId` | Group ID |
     * | `roomId` | Room ID |
     * | `state` | State |
     *
     * </details>
     */
    requestPendingAssignments(req: operations.RequestPendingAssignmentsRequest, config?: AxiosRequestConfig): Promise<operations.RequestPendingAssignmentsResponse>;
    /**
     * Request events of a room
     *
     * @remarks
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.3.0</h3>
     *
     * ### Description:
     * Retrieve syslog (audit log) events related to a room.
     *
     * ### Precondition:
     * Requires <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions on that room.
     *
     * ### Postcondition:
     * List of events is returned.
     *
     * ### Further Information:
     * Output may be limited to a certain number of entries.
     * Please use filter criteria and paging.
     *
     * Sort string syntax: `FIELD_NAME:ORDER`
     * `ORDER` can be `asc` or `desc`.
     * Multiple sort fields are supported.
     *
     * <details style="padding-left: 10px">
     * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
     *
     * `time:desc`
     * Sort by `time` descending (default sort option).
     *
     * </details>
     *
     * ### Sorting options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Description |
     * | :--- | :--- |
     * | `time` | Event timestamp |
     *
     * </details>
     */
    requestRoomActivitiesLogAsJson(req: operations.RequestRoomActivitiesLogAsJsonRequest, config?: AxiosRequestConfig): Promise<operations.RequestRoomActivitiesLogAsJsonResponse>;
    /**
     * Request room granted group(s) or / and group(s) that can be granted
     *
     * @remarks
     * ### Description:
     * Retrieve a list of groups that are and / or can be granted to the room.
     *
     * ### Precondition:
     * Any permissions on target room.
     *
     * ### Postcondition:
     * List of groups is returned.
     *
     * ### Further Information:
     *
     * ### Filtering:
     * All filter fields are connected via logical conjunction (**AND**)
     * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`
     *
     * <details style="padding-left: 10px">
     * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
     *
     * `isGranted:eq:false|name:cn:searchString`
     * Get all groups that are **NOT** granted to this room **AND** whose name is like `searchString`.
     *
     * </details>
     *
     * ### Filtering options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
     * | :--- | :--- | :--- | :--- | :--- |
     * | `name` | Group name filter | `cn` | Group name contains value. | `search String` |
     * | `groupId` | Group ID filter | `eq` | Group ID equals value. | `positive Integer` |
     * | `isGranted` | Filter the groups that have (no) access to this room.<br>**This filter is only available for room administrators.**<br>**Other users can only look for groups in their rooms, so this filter is `true` and **CANNOT** be overridden.** | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `true` |
     * | `permissionsManage` | Filter the groups that do (not) have `manage` permissions in this room. | `eq` |  | `true or false` |
     * | `effectivePerm` | Filter groups with DIRECT or DIRECT **AND** EFFECTIVE permissions<ul><li>`false`: DIRECT permissions</li><li>`true`: DIRECT **AND** EFFECTIVE permissions</li></ul>DIRECT means: e.g. room administrator grants `read` permissions to group of users **directly** on desired room.<br>EFFECTIVE means: e.g. group of users gets `read` permissions on desired room through **inheritance**. | `eq` |  | `true or false`<br>default: `false` |
     *
     * </details>
     *
     * ---
     *
     * ### Sorting:
     * Sort string syntax: `FIELD_NAME:ORDER`
     * `ORDER` can be `asc` or `desc`.
     * Multiple sort criteria are possible.
     * Fields are connected via logical conjunction **AND**.
     *
     * <details style="padding-left: 10px">
     * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
     *
     * `name:desc`
     * Sort by `name` descending.
     *
     * </details>
     *
     * ### Sorting options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Description |
     * | :--- | :--- |
     * | `name` | Group name |
     *
     * </details>
     */
    requestRoomGroups(req: operations.RequestRoomGroupsRequest, config?: AxiosRequestConfig): Promise<operations.RequestRoomGroupsResponse>;
    /**
     * Request Room Policies
     *
     * @remarks
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.32.0</h3>
     *
     * ### Description:
     * Retrieve the room policies:
     * * `defaultExpirationPeriod`
     *
     * ### Precondition:
     * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in that room.
     *
     * ### Postcondition:
     * Room Policies returned.
     *
     * ### Further Information:
     * `defaultExpirationPeriod`: Default policy room expiration period in seconds.
     * All existing and future files in a room will have their expiration date set to this period after their respective upload.
     * Existing files can be set to expire earlier afterwards.
     * `0` means no default expiration policy will be enforced.
     *
     *
     *
     */
    requestRoomPolicies(req: operations.RequestRoomPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.RequestRoomPoliciesResponse>;
    /**
     * Request room rescue key
     *
     * @remarks
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.24.0</h3>
     *
     * ### Description:
     * Returns the file key for the room emergency password / rescue key of a certain file (if available).
     *
     * ### Precondition:
     * User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in parent room.
     *
     * ### Postcondition:
     * File key is returned.
     *
     * ### Further Information:
     * None.
     */
    requestRoomRescueKey(req: operations.RequestRoomRescueKeyRequest, config?: AxiosRequestConfig): Promise<operations.RequestRoomRescueKeyResponse>;
    /**
     * Request room rescue key
     *
     * @remarks
     * ### Description:
     * Retrieve the room rescue key pair.
     *
     * ### Precondition:
     * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in that room.
     *
     * ### Postcondition:
     * Key pair is returned.
     *
     * ### Further Information:
     * None.
     */
    requestRoomRescueKeyPair(req: operations.RequestRoomRescueKeyPairRequest, config?: AxiosRequestConfig): Promise<operations.RequestRoomRescueKeyPairResponse>;
    /**
     * Request all room rescue key pairs
     *
     * @remarks
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
     *
     * ### Description:
     * Retrieve all room rescue key pairs to allow migrating room-rescue-key-encrypted file keys.
     *
     * ### Precondition:
     * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in that room.
     *
     * ### Postcondition:
     * List of key pairs is returned.
     *
     * ### Further Information:
     * In the case of an algorithm migration to a room rescue key pair, one should create the new key pair before deleting the old one. This allows re-encrypting file keys with the new key pair, using the old one.
     *
     * This API allows to retrieve both key pairs, in contrast to `GET /nodes/rooms/{room_id}/keypair`, which only delivers the preferred one.
     *
     */
    requestRoomRescueKeyPairs(req: operations.RequestRoomRescueKeyPairsRequest, config?: AxiosRequestConfig): Promise<operations.RequestRoomRescueKeyPairsResponse>;
    /**
     * Request list of all assigned S3 tags to the room
     *
     * @remarks
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.9.0</h3>
     *
     * ### Description:
     * Retrieve a list of S3 tags assigned to a room.
     *
     * ### Precondition:
     * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.
     *
     * ### Postcondition:
     * List of assigned S3 tags is returned.
     *
     * ### Further Information:
     * None.
     */
    requestRoomS3Tags(req: operations.RequestRoomS3TagsRequest, config?: AxiosRequestConfig): Promise<operations.RequestRoomS3TagsResponse>;
    /**
     * Request room granted user(s) or / and user(s) that can be granted
     *
     * @remarks
     * ### Description:
     * Retrieve a list of users that are and / or can be granted to the room.
     *
     * ### Precondition:
     * Any permissions on target room.
     *
     * ### Postcondition:
     * None.
     *
     * ### Further Information:
     * List of users is returned.
     *
     * ### Filtering:
     * All filter fields are connected via logical conjunction (**AND**)
     * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`
     *
     * <details style="padding-left: 10px">
     * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
     *
     * > `permissionsManage:eq:true|user:cn:searchString`
     * Get all users that have `manage` permissions to this room **AND** whose (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) is like `searchString`.
     *
     * </details>
     *
     * ### Filtering options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
     * | :--- | :--- | :--- | :--- | :--- |
     * | `user` | User filter | `cn` | User contains value (`firstName` **OR** `lastName` **OR** `email` **OR** `username`). | `search String` |
     * | `userId` | User ID filter | `eq` | User ID equals value. | `positive Integer` |
     * | `isGranted` | Filter the users that have (no) access to this room.<br>**This filter is only available for room administrators.**<br>**Other users can only look for users in their rooms, so this filter is `true` and **CANNOT** be overridden.** | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `true` |
     * | `permissionsManage` | Filter the users that do (not) have `manage` permissions in this room. | `eq` |  | `true or false` |
     * | `effectivePerm` | Filter users with DIRECT or DIRECT **AND** EFFECTIVE permissions<ul><li>`false`: DIRECT permissions</li><li>`true`: DIRECT **AND** EFFECTIVE permissions</li><li>`any`: DIRECT **AND** EFFECTIVE **AND** OVER GROUP permissions</li></ul>DIRECT means: e.g. room administrator grants `read` permissions to group of users **directly** on desired room.<br>EFFECTIVE means: e.g. group of users gets `read` permissions on desired room through **inheritance**.<br>OVER GROUP means: e.g. user gets `read` permissions on desired room through **group membership**. | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `false` |
     * | `hasRole` | User role filter<br>For more Roles information please call `GET /roles API` | `eq`, `neq` | User role  equals value. | <ul><li>`CONFIG_MANAGER` - Manage global configs</li><li>`USER_MANAGER` - Manage Users</li><li>`GROUP_MANAGER` - Manage User-Groups</li><li>`ROOM_MANAGER` - Manage top level Data Rooms</li><li>`LOG_AUDITOR` - Read logs</li><li>`NONMEMBER_VIEWER` - View users and groups when having room manage permission</li><li>`USER` - Regular User role</li><li>`GUEST_USER` - Guest User role</li></ul> |
     *
     * </details>
     *
     * ### Deprecated filtering options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
     * | :--- | :--- | :--- | :--- | :--- |
     * | <del>`displayName`</del> | User display name filter (use `user` filter) | `cn` | User display name contains value (`firstName` **OR** `lastName` **OR** `email`). | `search String` |
     *
     * </details>
     *
     * ---
     *
     * ### Sorting:
     * Sort string syntax: `FIELD_NAME:ORDER`
     * `ORDER` can be `asc` or `desc`.
     * Multiple sort criteria are possible.
     * Fields are connected via logical conjunction **AND**.
     *
     * <details style="padding-left: 10px">
     * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
     *
     * `user:desc`
     * Sort by `user` descending.
     *
     * </details>
     *
     * ### Sorting options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Description |
     * | :--- | :--- |
     * | **`user`** | User - sort by `firstName`, `lastName`, `username`, `email` (in this order) |
     *
     * </details>
     */
    requestRoomUsers(req: operations.RequestRoomUsersRequest, config?: AxiosRequestConfig): Promise<operations.RequestRoomUsersResponse>;
    /**
     * Request system rescue key
     *
     * @remarks
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.24.0</h3>
     *
     * ### Description:
     * Returns the file key for the system emergency password / rescue key of a certain file (if available).
     *
     * ### Precondition:
     * User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in parent room.
     *
     * ### Postcondition:
     * File key is returned.
     *
     * ### Further Information:
     * None.
     */
    requestSystemRescueKey(req: operations.RequestSystemRescueKeyRequest, config?: AxiosRequestConfig): Promise<operations.RequestSystemRescueKeyResponse>;
    /**
     * Request status of S3 file upload
     *
     * @remarks
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.15.0</h3>
     *
     * ### Description:
     * Request status of a S3 file upload.
     *
     * ### Precondition:
     * An upload channel has been created and user has to be the creator of the upload channel.
     *
     * ### Postcondition:
     * Status of S3 multipart upload request is returned.
     *
     * ### Further Information:
     * None.
     *
     * ### Possible errors:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | Http Status | Error Code | Description |
     * | :--- | :--- | :--- |
     * | `400 Bad Request` | `-80000` | Mandatory fields cannot be empty |
     * | `400 Bad Request` | `-80001` | Invalid positive number |
     * | `400 Bad Request` | `-80002` | Invalid number |
     * | `400 Bad Request` | `-40001` | (Target) room is not encrypted |
     * | `400 Bad Request` | `-40755` | Bad file name |
     * | `400 Bad Request` | `-40763` | File key must be set for an upload into encrypted room |
     * | `400 Bad Request` | `-50506` | Exceeds the number of files for this Upload Share |
     * | `403 Forbidden` |  | Access denied |
     * | `404 Not Found` | `-20501` | Upload not found |
     * | `404 Not Found` | `-40000` | Container not found |
     * | `404 Not Found` | `-41000` | Node not found |
     * | `404 Not Found` | `-70501` | User not found |
     * | `409 Conflict` | `-40010` | Container cannot be overwritten |
     * | `409 Conflict` |  | File cannot be overwritten |
     * | `500 Internal Server Error` |  | System Error |
     * | `502 Bad Gateway` |  | S3 Error |
     * | `502 Insufficient Storage` | `-50504` | Exceeds the quota for this Upload Share |
     * | `502 Insufficient Storage` | `-40200` | Exceeds the free node quota in room |
     * | `502 Insufficient Storage` | `-90200` | Exceeds the free customer quota |
     * | `502 Insufficient Storage` | `-90201` | Exceeds the free customer physical disk space |
     *
     * </details>
     */
    requestUploadStatusFiles(req: operations.RequestUploadStatusFilesRequest, config?: AxiosRequestConfig): Promise<operations.RequestUploadStatusFilesResponse>;
    /**
     * Request user's file key
     *
     * @remarks
     * ### Description:
     * Returns the file key for the current user (if available).
     *
     * ### Precondition:
     * User with one of the following permissions in parent room: <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span>
     *
     * ### Postcondition:
     * File key is returned.
     *
     * ### Further Information:
     * The symmetric file key is encrypted with the user's public key.
     * File keys are generated with the workflow _"Generate file keys"_ that starts at `GET /nodes/missingFileKeys`.
     */
    requestUserFileKey(req: operations.RequestUserFileKeyRequest, config?: AxiosRequestConfig): Promise<operations.RequestUserFileKeyResponse>;
    /**
     * Restore deleted nodes
     *
     * @remarks
     * ### Description:
     * Restore a list of deleted nodes.
     *
     * ### Precondition:
     * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; create</span> permissions in parent room and <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; restore recycle bin</span> permissions.
     *
     * ### Postcondition:
     * The selected files are moved from the recycle bin to the chosen productive container.
     *
     * ### Further Information:
     * If no parent ID is provided, the node is restored to its previous location.
     * The default resolution strategy is `autorename` that adds numbers to the file name until the conflict is solved.
     * If an existing file is overwritten, it is moved to the recycle bin instead of the restored one.
     *
     * Download share id (if exists) gets changed if:
     * - node with the same name exists in the target container
     * - `resolutionStrategy` is `overwrite`
     * - `keepShareLinks` is `true`
     */
    restoreNodes(req: operations.RestoreNodesRequest, config?: AxiosRequestConfig): Promise<operations.RestoreNodesResponse>;
    /**
     * Revoke granted group(s) from room
     *
     * @remarks
     * ### Description:
     * Revoke granted groups from room.
     *
     * ### Precondition:
     * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.
     *
     * ### Postcondition:
     * Group's permissions are revoked.
     *
     * ### Further Information:
     * Batch function.
     */
    revokeRoomGroups(req: operations.RevokeRoomGroupsRequest, config?: AxiosRequestConfig): Promise<operations.RevokeRoomGroupsResponse>;
    /**
     * Revoke granted user(s) from room
     *
     * @remarks
     * ### Description:
     * Revoke granted users from room.
     *
     * ### Precondition:
     * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.
     *
     * ### Postcondition:
     * User's permissions are revoked.
     *
     * ### Further Information:
     * Batch function.
     */
    revokeRoomUsers(req: operations.RevokeRoomUsersRequest, config?: AxiosRequestConfig): Promise<operations.RevokeRoomUsersResponse>;
    /**
     * Search nodes
     *
     * @remarks
     * ### Description:
     * Provides a flat list of file system nodes (rooms, folders or files) of a given parent that are accessible by the current user.
     *
     * ### Precondition:
     * Authenticated user is allowed to <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128065; see</span> nodes (i.e. `isBrowsable = true`).
     *
     * ### Postcondition:
     * List of nodes is returned.
     *
     * ### Further Information:
     * Output is limited to **500** entries.
     * For more results please use filter criteria and paging (`offset` + `limit`).
     * `EncryptionInfo` is **NOT** provided.
     * Wildcard character is the asterisk character: `*`
     *
     * ### Filtering:
     * All filter fields are connected via logical conjunction (**AND**)
     * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
     *
     * <details style="padding-left: 10px">
     * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
     *
     * `type:eq:file|createdAt:ge:2015-01-01`
     * Get nodes where type equals `file` **AND** file creation date is **>=** `2015-01-01`.
     *
     * </details>
     *
     * ### Filtering options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME`            | Filter Description                | `OPERATOR` | Operator Description                                                                                                                                                                                                                                                                | `VALUE` |
     * |:------------------------|:----------------------------------| :--- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| :--- |
     * | `type`                  | Node type filter                  | `eq` | Node type equals value.<br>Multiple values are allowed and will be connected via logical disjunction (**OR**).<br>e.g. `type:eq:room:folder`                                                                                                                                        | <ul><li>`room`</li><li>`folder`</li><li>`file`</li></ul> |
     * | `fileType`              | File type filter (file extension) | `cn, eq` | File type contains / equals value.                                                                                                                                                                                                                                                  | `search String` |
     * | `classification`        | Classification filter             | `eq` | Classification equals value.                                                                                                                                                                                                                                                        | <ul><li>`1` - public</li><li>`2` - internal</li><li>`3` - confidential</li><li>`4` - strictly confidential</li></ul> |
     * | `createdBy`             | Creator login filter              | `cn, eq` | Creator login contains / equals value (`firstName` **OR** `lastName` **OR** `email` **OR** `username`).                                                                                                                                                                             | `search String` |
     * | `createdById`           | Creator ID filter                 | `eq` | Creator ID equals value.                                                                                                                                                                                                                                                            | `positive Integer  or -1 for external user` |
     * | `createdAt`             | Creation date filter              | `ge, le` | Creation date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `createdAt:ge:2016-12-31`&#124;`createdAt:le:2018-01-01`                                                                | `Date (yyyy-MM-dd)` |
     * | `updatedBy`             | Last modifier login filter        | `cn, eq` | Last modifier login contains / equals value (`firstName` **OR** `lastName` **OR** `email` **OR** `username`).                                                                                                                                                                       | `search String` |
     * | `updatedById`           | Last modifier ID filter           | `eq` | Modifier ID equals value.                                                                                                                                                                                                                                                           | `positive Integer or -1 for external user` |
     * | `updatedAt`             | Last modification date filter     | `ge, le` | Last modification date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `updatedAt:ge:2016-12-31`&#124;`updatedAt:le:2018-01-01`                                                       | `Date (yyyy-MM-dd)` |
     * | `expireAt`              | Expiration date filter            | `ge, le` | Expiration date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `expireAt:ge:2016-12-31`&#124;`expireAt:le:2018-01-01`                                                                | `Date (yyyy-MM-dd)` |
     * | `size`                  | Node size filter                  | `ge, le` | Node size is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `size:ge:5`&#124;`size:le:10`                                                                                               | `size in bytes` |
     * | `isFavorite`            | Favorite filter                   | `eq` |                                                                                                                                                                                                                                                                                     | `true or false` |
     * | `branchVersion`         | Node branch version filter        | `ge, le` | Branch version is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `branchVersion:ge:1423280937404`&#124;`branchVersion:le:1523280937404`                                                 | `version number` |
     * | `parentPath`            | Parent path                       | `cn, eq` | Parent path contains / equals  value.                                                                                                                                                                                                                                               | `search String` |
     * | `timestampCreation`     | Creation timestamp filter         | `ge, le` | Creation timestamp is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `timestampCreation:ge:2016-12-31T23:00:00.123`&#124;<br>`timestampCreation:le:2018-01-01T11:00:00.540`             | `Date (yyyy-MM-dd)` |
     * | `timestampModification` | Modification timestamp filter     | `ge, le` | Modification timestamp is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `timestampModification:ge:2016-12-31T23:00:00.123`&#124;<br>`timestampModification:le:2018-01-01T11:00:00.540` | `Date (yyyy-MM-dd)` |
     * | `referenceId`           | Reference ID filter               | `eq` | Reference ID equals value.                                                                                                                                                                                                                                                          | `Integer ` |
     * </details>
     *
     * ---
     *
     * ### Sorting:
     * Sort string syntax: `FIELD_NAME:ORDER`
     * `ORDER` can be `asc` or `desc`.
     * Multiple sort criteria are possible.
     * Fields are connected via logical conjunction **AND**.
     *
     * <details style="padding-left: 10px">
     * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
     *
     * `name:desc|size:asc`
     * Sort by `name` descending **AND** `size` ascending.
     *
     * </details>
     *
     * ### Sorting options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Description |
     * | :--- | :--- |
     * | `name` | Node name |
     * | `createdAt` | Creation date |
     * | `createdBy` | Creator first name, last name |
     * | `updatedAt` | Last modification date |
     * | `updatedBy` | Last modifier first name, last name |
     * | `fileType` | File type (extension) |
     * | `classification` | Classification ID:<ul><li>1 - public</li><li>2 - internal</li><li>3 - confidential</li><li>4 - strictly confidential</li></ul> |
     * | `size` | Node size |
     * | `cntDeletedVersions` | Number of deleted versions of this file / folder (**NOT** recursive; for files and folders only) |
     * | `type` | Node type (room, folder, file) |
     * | `parentPath` | Parent path |
     * | `timestampCreation` | Creation timestamp |
     * | `timestampModification` | Modification timestamp |
     *
     * </details>
     *
     * ### Deprecated sorting options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Description |
     * | :--- | :--- |
     * | <del>`cntChildren`</del> | Number of direct children (**NOT** recursive; for rooms and folders only) |
     *
     * </details>
     */
    searchNodes(req: operations.SearchNodesRequest, config?: AxiosRequestConfig): Promise<operations.SearchNodesResponse>;
    /**
     * Set room policies
     *
     * @remarks
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.32.0</h3>
     *
     * ### Description:
     * Retrieve the room policies:
     * * `defaultExpirationPeriod`
     *
     * ### Precondition:
     * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.
     *
     * ### Postcondition:
     * Room policy is set.
     *
     * ### Further Information:
     * `defaultExpirationPeriod`: Default policy room expiration period in seconds.
     * All existing and future files in a room will have their expiration date set to this period after their respective upload.
     * Existing files can be set to expire earlier afterwards.
     * `0` means no default expiration policy will be enforced. This removes all expiration dates from existing files.
     */
    setRoomPolicies(req: operations.SetRoomPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.SetRoomPoliciesResponse>;
    /**
     * Set room's rescue key pair
     *
     * @remarks
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
     *
     * ### Description:
     * Set room rescue key pair.
     *
     * ### Precondition:
     * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.
     *
     * ### Postcondition:
     * Key pair is set.
     *
     * ### Further Information:
     * Room rescue key pair can be used to upgrade algorithm.
     */
    setRoomRescueKeyPair(req: operations.SetRoomRescueKeyPairRequest, config?: AxiosRequestConfig): Promise<operations.SetRoomRescueKeyPairResponse>;
    /**
     * Set S3 tags for a room
     *
     * @remarks
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.9.0</h3>
     *
     * ### Description:
     * Set S3 tags to a room.
     *
     * ### Precondition:
     * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.
     *
     * ### Postcondition:
     * Provided S3 tags are assigned to a room.
     *
     * ### Further Information:
     * Every request overrides current S3 tags.
     * Mandatory S3 tag IDs **MUST** be sent.
     */
    setRoomS3Tags(req: operations.SetRoomS3TagsRequest, config?: AxiosRequestConfig): Promise<operations.SetRoomS3TagsResponse>;
    /**
     * Set file keys for a list of users and files
     *
     * @remarks
     * ### Description:
     * Sets symmetric file keys for several users and files.
     *
     * ### Precondition:
     * User has file keys for the files.
     * Only settable by users that own one of the following permissions: <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span>
     *
     * ### Postcondition:
     * Stores new file keys for other users.
     *
     * ### Further Information:
     * Only users with copies of the file key (encrypted with their public keys) can access a certain file.
     * This endpoint is used for the distribution of file keys amongst an authorized user base.
     * User can set file key for himself.
     * The users who already have a file key are ignored and keep the distributed file key
     *
     */
    setUserFileKeys(req: operations.SetUserFileKeysRequest, config?: AxiosRequestConfig): Promise<operations.SetUserFileKeysResponse>;
    /**
     * Mark or unmark a list of nodes (room, folder or file) as favorite
     *
     * @remarks
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.25.0</h3>
     *
     * ### Description:
     * Marks or unmarks a list of nodes (room, folder or file) as favorite.
     *
     * ### Precondition:
     * Authenticated user is allowed to <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128065; see</span> the node (i.e. `isBrowsable = true`).
     *
     * ### Postcondition:
     * Nodes gets marked as favorite.
     *
     * ### Further Information:
     * Maximum number of nodes is 200.
     */
    updateFavorites(req: operations.UpdateFavoritesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFavoritesResponse>;
    /**
     * Updates a file’s metadata
     *
     * @remarks
     * ### Description:
     * Updates a list of file’s metadata.
     *
     * ### Precondition:
     * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change</span> permissions in parent room.
     *
     * ### Postcondition:
     * File's metadata is changed.
     *
     *
     *
     */
    updateFile(req: operations.UpdateFileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFileResponse>;
    /**
     * Updates a list of  file’s metadata
     *
     * @remarks
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.25.0</h3>
     *
     * ### Description:
     * Updates a list of file’s metadata.
     *
     * ### Precondition:
     * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change</span> permissions in parent room.
     *
     * ### Postcondition:
     * File's metadata is changed.
     *
     * ### Further Information:
     * Maximum number of files is 200
     *
     */
    updateFiles(req: operations.UpdateFilesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFilesResponse>;
    /**
     * Updates folder’s metadata
     *
     * @remarks
     * ### Description:
     * Updates folder’s metadata.
     *
     * ### Precondition:
     * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change</span> permissions in parent room.
     *
     * ### Postcondition:
     * Folder's metadata is changed.
     *
     * ### Further Information:
     * Notes are limited to **255** characters.
     *
     * ### Node naming convention:
     * * Node (room, folder, file) names are limited to **150** characters.
     * * Illegal names:
     * `'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
     * * Illegal characters in names:
     * `'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `
     *
     */
    updateFolder(req: operations.UpdateFolderRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFolderResponse>;
    /**
     * Edit node comment
     *
     * @remarks
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.10.0</h3>
     *
     * ### Description:
     * Edit the text of an existing comment for a specific node.
     *
     * ### Precondition:
     * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions on the node and is the creator of the comment.
     *
     * ### Postcondition:
     * Comments text gets changed.
     *
     * ### Further Information:
     * Maximum allowed text length: **65535** characters.
     */
    updateNodeComment(req: operations.UpdateNodeCommentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNodeCommentResponse>;
    /**
     * Updates room’s metadata
     *
     * @remarks
     * ### Description:
     * Updates room’s metadata.
     *
     * ### Precondition:
     * User is a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span> at superordinated level.
     *
     * ### Postcondition:
     * Room's metadata is changed.
     *
     * ### Further Information:
     * Notes are limited to **255** characters.
     *
     * ### Node naming convention:
     * * Node (room, folder, file) names are limited to **150** characters.
     * * Illegal names:
     * `'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
     * * Illegal characters in names:
     * `'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `
     */
    updateRoom(req: operations.UpdateRoomRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRoomResponse>;
    /**
     * Add or change room granted group(s)
     *
     * @remarks
     * ### Description:
     * All existing group permissions will be overwritten.
     *
     * ### Precondition:
     * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>. To add new members, the user needs the right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; non-members add</span>, which is included in any role.
     *
     * ### Postcondition:
     * Group's permissions are changed.
     *
     * ### Further Information:
     * Batch function.
     *
     */
    updateRoomGroups(req: operations.UpdateRoomGroupsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRoomGroupsResponse>;
    /**
     * Add or change room granted user(s)
     *
     * @remarks
     * ### Description:
     * All existing user permissions will be overwritten.
     *
     * ### Precondition:
     * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>. To add new members, the user needs the right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; non-members add</span>, which is included in any role.
     *
     * ### Postcondition:
     * User's permissions are changed.
     *
     * ### Further Information:
     * Batch function.
     */
    updateRoomUsers(req: operations.UpdateRoomUsersRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRoomUsersResponse>;
    /**
     * Upload file
     *
     * @remarks
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.9.0</h3>
     *
     * ### Use `uploads` API
     *
     * ### Description:
     * Uploads a file or parts of it in an active upload channel.
     *
     * ### Precondition:
     * An upload channel has been created.
     *
     * ### Postcondition:
     * A file or parts of it are uploaded to a temporary location.
     *
     * ### Further Information:
     * This endpoints supports chunked upload.
     *
     * Following `Content-Types` are supported by this API:
     * * `multipart/form-data`
     * * provided `Content-Type`
     *
     * For both file upload types set the correct `Content-Type` header and body.
     *
     * ### Examples:
     *
     * * `multipart/form-data`
     * ```
     * POST /api/v4/nodes/files/uploads/{upload_id} HTTP/1.1
     *
     * Header:
     * ...
     * Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW
     * ...
     *
     * Body:
     * ------WebKitFormBoundary7MA4YWxkTrZu0gW
     * Content-Disposition: form-data; name="file"; filename="file.txt"
     * Content-Type: text/plain
     *
     * Content of file.txt
     * ------WebKitFormBoundary7MA4YWxkTrZu0gW--
     * ```
     *
     * * any other `Content-Type`
     * ```
     * POST /api/v4/nodes/files/uploads/{upload_id}  HTTP/1.1
     *
     * Header:
     * ...
     * Content-Type: { ... }
     * ...
     *
     * Body:
     * raw content
     * ```
     *
     * @see {@link https://tools.ietf.org/html/rfc7233} - Range Requests
     */
    uploadFileAsMultipart(req: operations.UploadFileAsMultipartRequest, config?: AxiosRequestConfig): Promise<operations.UploadFileAsMultipartResponse>;
}
