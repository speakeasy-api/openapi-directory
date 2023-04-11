import { SpeakeasyBase } from "../../../internal/utils";
import { MediaScoreSharingModeEnum } from "./mediascoresharingmodeenum";
/**
 * The type of the assignment resolved:
 *
 * @remarks
 * * `rich`, `photo`, `video` are attachment types that are automatically resolved from a `link` attachment.
 * * A `flat` attachment is a score document where the unique identifier will be specified in the `score` property. Its sharing mode will be provided in the `sharingMode` property.
 *
 */
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
 *
 * @remarks
 * and media available if possible and return them in this object
 *
 */
export declare class MediaAttachment extends SpeakeasyBase {
    /**
     * The resolved author name of the attachment
     */
    authorName?: string;
    /**
     * The resolved author url of the attachment
     */
    authorUrl?: string;
    /**
     * The resolved description of the attachment
     */
    description?: string;
    /**
     * The ID of the Google Drive File
     */
    googleDriveFileId?: string;
    /**
     * If the attachment type is `rich` or `video`, the HTML code of the
     *
     * @remarks
     * media to display
     *
     */
    html?: string;
    /**
     * If the `html` is available, the height of the widget
     */
    htmlHeight?: string;
    /**
     * If the `html` is available, the width of the widget
     */
    htmlWidth?: string;
    /**
     * The URL of the icon
     */
    iconUrl?: string;
    /**
     * To be used with a score attached in `sharingMode` `copy` (score used as template). If true, students won't be able to change the original notes of the template.
     */
    lockScoreTemplate?: boolean;
    /**
     * The mine type of the file
     */
    mimeType?: string;
    /**
     * An unique revision identifier of a score
     */
    revision?: string;
    /**
     * An unique Flat score identifier
     */
    score?: string;
    /**
     * The sharing mode of the score for classes post and assignments
     */
    sharingMode?: MediaScoreSharingModeEnum;
    /**
     * If the `thumbnailUrl` is available, the width of the thumbnail
     *
     * @remarks
     *
     */
    thumbnailHeight?: number;
    /**
     * If the attachment type is `rich`, `video`, `photo` or `link`, a
     *
     * @remarks
     * displayable thumbnail for this attachment
     *
     */
    thumbnailUrl?: string;
    /**
     * If the `thumbnailUrl` is available, the width of the thumbnail
     *
     * @remarks
     *
     */
    thumbnailWidth?: number;
    /**
     * The resolved title of the attachment
     */
    title?: string;
    /**
     * A unique track identifier
     */
    track?: string;
    /**
     * The type of the assignment resolved:
     *
     * @remarks
     * * `rich`, `photo`, `video` are attachment types that are automatically resolved from a `link` attachment.
     * * A `flat` attachment is a score document where the unique identifier will be specified in the `score` property. Its sharing mode will be provided in the `sharingMode` property.
     *
     */
    type?: MediaAttachmentTypeEnum;
    /**
     * The url of the attachment
     */
    url?: string;
    /**
     * An unique worksheet identifier
     */
    worksheet?: string;
}
