import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of actor.
 *
 * @remarks
 * Can be one of `user`, `asana`, `asana_support`, `anonymous`, or `external_administrator`.
 */
export declare enum AuditLogEventActorActorTypeEnum {
    User = "user",
    Asana = "asana",
    AsanaSupport = "asana_support",
    Anonymous = "anonymous",
    ExternalAdministrator = "external_administrator"
}
/**
 * The entity that triggered the event. Will typically be a user.
 */
export declare class AuditLogEventActor extends SpeakeasyBase {
    /**
     * The type of actor.
     *
     * @remarks
     * Can be one of `user`, `asana`, `asana_support`, `anonymous`, or `external_administrator`.
     */
    actorType?: AuditLogEventActorActorTypeEnum;
    /**
     * The email of the actor, if it is a user.
     */
    email?: string;
    /**
     * Globally unique identifier of the actor, if it is a user.
     */
    gid?: string;
    /**
     * The name of the actor, if it is a user.
     */
    name?: string;
}
