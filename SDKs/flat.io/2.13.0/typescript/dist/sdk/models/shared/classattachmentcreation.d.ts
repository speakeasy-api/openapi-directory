import { SpeakeasyBase } from "../../../internal/utils";
import { MediaScoreSharingModeEnum } from "./mediascoresharingmodeenum";
export declare enum ClassAttachmentCreationTypeEnum {
    Flat = "flat",
    Link = "link",
    GoogleDrive = "googleDrive",
    Worksheet = "worksheet"
}
/**
 * Attachment creation for an assignment or stream post.
 * This attachment must contain a `score` or an `url`, all the details of this one will be resolved and returned as `ClassAttachment` once the assignment or stream post is created.
 *
**/
export declare class ClassAttachmentCreation extends SpeakeasyBase {
    googleDriveFileId?: string;
    lockScoreTemplate?: boolean;
    score?: string;
    sharingMode?: MediaScoreSharingModeEnum;
    type?: ClassAttachmentCreationTypeEnum;
    url?: string;
    worksheet?: string;
}
