import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An *attachment* object represents any file attached to a task in Asana, whether it’s an uploaded file or one associated via a third-party service such as Dropbox or Google Drive.
 */
export declare class AttachmentCompact extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * The name of the file.
     */
    name?: string;
    /**
     * The service hosting the attachment. Valid values are `asana`, `dropbox`, `gdrive`, `onedrive`, `box`, `vimeo`, and `external`.
     */
    resourceSubtype?: string;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
}
