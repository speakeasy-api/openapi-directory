import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An *attachment* object represents any file attached to a task in Asana, whether it’s an uploaded file or one associated via a third-party service such as Dropbox or Google Drive.
**/
export declare class AttachmentCompact extends SpeakeasyBase {
    gid?: string;
    name?: string;
    resourceSubtype?: any;
    resourceType?: string;
}
