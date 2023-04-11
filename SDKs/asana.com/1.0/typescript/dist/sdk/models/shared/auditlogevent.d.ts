import { SpeakeasyBase } from "../../../internal/utils";
import { AuditLogEventActor } from "./auditlogeventactor";
import { AuditLogEventContext } from "./auditlogeventcontext";
import { AuditLogEventResource } from "./auditlogeventresource";
/**
 * An object representing a single event within an Asana domain.
 *
 * @remarks
 *
 * Every audit log event is comprised of an `event_type`, `actor`, `resource`, and `context`. Some events will include additional metadata about the event under `details`. See our [currently supported list of events](/docs/supported-auditlogevents) for more details.
 */
export declare class AuditLogEvent extends SpeakeasyBase {
    actor?: AuditLogEventActor;
    context?: AuditLogEventContext;
    /**
     * The time the event was created.
     */
    createdAt?: Date;
    details?: Record<string, any>;
    /**
     * The category that this `event_type` belongs to.
     */
    eventCategory?: string;
    /**
     * The type of the event.
     */
    eventType?: string;
    /**
     * Globally unique identifier of the `AuditLogEvent`, as a string.
     */
    gid?: string;
    resource?: AuditLogEventResource;
}
