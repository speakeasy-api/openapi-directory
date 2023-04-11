import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Current status of the upload:
 *
 * @remarks
 *   * `UPLOADING` - Uploading has started, parts are still coming in.
 *   * `INVALID` - Upload has failed validity check.
 *   * `PENDING` - Upload has been received by Climate and is being processed.
 *   * `INBOX` - The upload is awaiting user acceptance in their Data Inbox.
 *   * `DECLINED` - The user has declined the upload in their Data Inbox.
 *   * `IMPORTING` - The user has accepted the upload and it is being imported into their account.
 *   * `SUCCESS` - The upload has been successfully imported.
 *
 */
export declare enum UploadStatusStatusEnum {
    Uploading = "UPLOADING",
    Invalid = "INVALID",
    Pending = "PENDING",
    Inbox = "INBOX",
    Declined = "DECLINED",
    Importing = "IMPORTING",
    Success = "SUCCESS"
}
/**
 * OK
 */
export declare class UploadStatus extends SpeakeasyBase {
    /**
     * Unique identifier for the upload.
     */
    id: string;
    /**
     * Current status of the upload:
     *
     * @remarks
     *   * `UPLOADING` - Uploading has started, parts are still coming in.
     *   * `INVALID` - Upload has failed validity check.
     *   * `PENDING` - Upload has been received by Climate and is being processed.
     *   * `INBOX` - The upload is awaiting user acceptance in their Data Inbox.
     *   * `DECLINED` - The user has declined the upload in their Data Inbox.
     *   * `IMPORTING` - The user has accepted the upload and it is being imported into their account.
     *   * `SUCCESS` - The upload has been successfully imported.
     *
     */
    status: UploadStatusStatusEnum;
}
