import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of event being recorded.
 */
export declare enum ExternalEventEntityEventTypeEnum {
    LdapSync = "ldap_sync",
    RemoteServerSync = "remote_server_sync",
    Lockout = "lockout",
    LdapLogin = "ldap_login",
    SamlLogin = "saml_login",
    ClientLog = "client_log",
    PendingWork = "pending_work"
}
/**
 * Status of event.
 */
export declare enum ExternalEventEntityStatusEnum {
    Success = "success",
    Failure = "failure",
    PartialFailure = "partial_failure",
    InProgress = "in_progress",
    Skipped = "skipped"
}
/**
 * List External Events
 */
export declare class ExternalEventEntity extends SpeakeasyBase {
    /**
     * Event body
     */
    body?: string;
    /**
     * Link to log file.
     */
    bodyUrl?: string;
    /**
     * For sync events, the total number of bytes synced.
     */
    bytesSynced?: number;
    /**
     * External event create date/time
     */
    createdAt?: Date;
    /**
     * For sync events, the number of files that encountered errors.
     */
    erroredFiles?: number;
    /**
     * Type of event being recorded.
     */
    eventType?: ExternalEventEntityEventTypeEnum;
    /**
     * Folder Behavior ID
     */
    folderBehaviorId?: number;
    /**
     * Event ID
     */
    id?: number;
    /**
     * Associated Remote Server type, if any
     */
    remoteServerType?: string;
    /**
     * Status of event.
     */
    status?: ExternalEventEntityStatusEnum;
    /**
     * For sync events, the number of files handled successfully.
     */
    successfulFiles?: number;
}
