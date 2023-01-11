import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The task this attachment is attached to.
**/
export declare class AttachmentResponseParent extends SpeakeasyBase {
    gid?: string;
    name?: string;
    resourceType?: string;
}
/**
 * An *attachment* object represents any file attached to a task in Asana, whether it’s an uploaded file or one associated via a third-party service such as Dropbox or Google Drive.
**/
export declare class AttachmentResponse extends SpeakeasyBase {
    createdAt?: Date;
    downloadUrl?: string;
    gid?: string;
    host?: string;
    name?: string;
    parent?: AttachmentResponseParent;
    resourceSubtype?: any;
    resourceType?: string;
    viewUrl?: string;
}
