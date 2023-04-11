import { SpeakeasyBase } from "../../../internal/utils";
import { MediaScoreSharingModeEnum } from "./mediascoresharingmodeenum";
/**
 * The type of the attachment posted
 */
export declare enum ClassAttachmentCreationTypeEnum {
    Flat = "flat",
    Link = "link",
    GoogleDrive = "googleDrive",
    Worksheet = "worksheet"
}
/**
 * Attachment creation for an assignment or stream post.
 *
 * @remarks
 * This attachment must contain a `score` or an `url`, all the details of this one will be resolved and returned as `ClassAttachment` once the assignment or stream post is created.
 *
 */
export declare class ClassAttachmentCreation extends SpeakeasyBase {
    /**
     * The ID of the Google Drive File
     */
    googleDriveFileId?: string;
    /**
     * To be used with a score attached in `sharingMode` `copy` (score used as template). If true, students won't be able to change the original notes of the template.
     */
    lockScoreTemplate?: boolean;
    /**
     * A unique Flat score identifier. The user creating the assignment must at least have read access to the document. If the user has admin rights, new group permissions will be automatically added for the
     *
     * @remarks
     * teachers and students of the class.
     *
     */
    score?: string;
    /**
     * The sharing mode of the score for classes post and assignments
     */
    sharingMode?: MediaScoreSharingModeEnum;
    /**
     * The type of the attachment posted
     */
    type?: ClassAttachmentCreationTypeEnum;
    /**
     * The URL of the attachment.
     */
    url?: string;
    /**
     * An unique worksheet identifier
     */
    worksheet?: string;
}
