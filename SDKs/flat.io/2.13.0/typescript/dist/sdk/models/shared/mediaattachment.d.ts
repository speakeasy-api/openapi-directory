import { SpeakeasyBase } from "../../../internal/utils";
import { MediaScoreSharingModeEnum } from "./mediascoresharingmodeenum";
export declare enum MediaAttachmentTypeEnum {
    Rich = "rich",
    Photo = "photo",
    Video = "video",
    Link = "link",
    Flat = "flat",
    GoogleDrive = "googleDrive",
    Worksheet = "worksheet",
    Performance = "performance"
}
/**
 * Media attachment. The API will automatically resolve the details, oEmbed,
 * and media available if possible and return them in this object
 *
**/
export declare class MediaAttachment extends SpeakeasyBase {
    authorName?: string;
    authorUrl?: string;
    description?: string;
    googleDriveFileId?: string;
    html?: string;
    htmlHeight?: string;
    htmlWidth?: string;
    iconUrl?: string;
    lockScoreTemplate?: boolean;
    mimeType?: string;
    revision?: string;
    score?: string;
    sharingMode?: MediaScoreSharingModeEnum;
    thumbnailHeight?: number;
    thumbnailUrl?: string;
    thumbnailWidth?: number;
    title?: string;
    track?: string;
    type?: MediaAttachmentTypeEnum;
    url?: string;
    worksheet?: string;
}
