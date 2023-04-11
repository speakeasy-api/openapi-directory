import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
 *
 * @remarks
 * The resource_subtype `milestone` represent a single moment in time. This means tasks with this subtype cannot have a start_date.
 */
export declare enum AttachmentResponseParentResourceSubtypeEnum {
    DefaultTask = "default_task",
    Milestone = "milestone",
    Section = "section",
    Approval = "approval"
}
/**
 * The *task* is the basic object around which many operations in Asana are centered.
 */
export declare class AttachmentResponseParent extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * The name of the task.
     */
    name?: string;
    /**
     * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
     *
     * @remarks
     * The resource_subtype `milestone` represent a single moment in time. This means tasks with this subtype cannot have a start_date.
     */
    resourceSubtype?: AttachmentResponseParentResourceSubtypeEnum;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
}
/**
 * An *attachment* object represents any file attached to a task in Asana, whether it’s an uploaded file or one associated via a third-party service such as Dropbox or Google Drive.
 */
export declare class AttachmentResponse extends SpeakeasyBase {
    /**
     * Whether the attachment is connected to the app making the request for the purposes of showing an app components widget. Only present when the `resource_subtype` is `external` or `gdrive`.
     */
    connectedToApp?: boolean;
    /**
     * The time at which this resource was created.
     */
    createdAt?: Date;
    /**
     * The URL containing the content of the attachment.
     *
     * @remarks
     * *Note:* May be null if the attachment is hosted by [Box](https://www.box.com/) and will be null if the attachment is a Video Message hosted by [Vimeo](https://vimeo.com/). If present, this URL may only be valid for two minutes from the time of retrieval. You should avoid persisting this URL somewhere and just refresh it on demand to ensure you do not keep stale URLs.
     */
    downloadUrl?: string;
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * The service hosting the attachment. Valid values are `asana`, `dropbox`, `gdrive`, `box`, and `vimeo`.
     */
    host?: string;
    /**
     * The name of the file.
     */
    name?: string;
    parent?: AttachmentResponseParent;
    permanentUrl?: string;
    /**
     * The service hosting the attachment. Valid values are `asana`, `dropbox`, `gdrive`, `onedrive`, `box`, `vimeo`, and `external`.
     */
    resourceSubtype?: string;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
    /**
     * The size of the attachment in bytes. Only present when the `resource_subtype` is `asana`.
     */
    size?: number;
    /**
     * The URL where the attachment can be viewed, which may be friendlier to users in a browser than just directing them to a raw file. May be null if no view URL exists for the service.
     */
    viewUrl?: string;
}
