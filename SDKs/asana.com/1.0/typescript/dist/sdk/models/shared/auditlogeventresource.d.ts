import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The primary object that was affected by this event.
 */
export declare class AuditLogEventResource extends SpeakeasyBase {
    /**
     * The email of the resource, if applicable.
     */
    email?: string;
    /**
     * Globally unique identifier of the resource.
     */
    gid?: string;
    /**
     * The name of the resource.
     */
    name?: string;
    /**
     * The subtype of resource. Most resources will not have a subtype.
     */
    resourceSubtype?: string;
    /**
     * The type of resource.
     */
    resourceType?: string;
}
