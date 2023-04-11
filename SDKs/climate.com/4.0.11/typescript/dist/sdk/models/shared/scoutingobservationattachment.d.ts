import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of the attachment. For example : ACTIVE, DELETED
 */
export declare enum ScoutingObservationAttachmentStatusEnum {
    Active = "ACTIVE",
    Deleted = "DELETED"
}
export declare class ScoutingObservationAttachment extends SpeakeasyBase {
    /**
     * The content type of the attachment, e.g. image/png.
     */
    contentType: string;
    /**
     * id of the attachment
     */
    id: string;
    /**
     * The number of bytes in the attachment.
     */
    length: number;
    /**
     * The status of the attachment. For example : ACTIVE, DELETED
     */
    status: ScoutingObservationAttachmentStatusEnum;
    /**
     * The time the attachment was last updated.
     *
     * @remarks
     * Time in ISO 8601 format with UTC timezone, 3 fractional seconds.
     * (https://tools.ietf.org/html/rfc3339)
     *
     */
    updatedAt: Date;
}
