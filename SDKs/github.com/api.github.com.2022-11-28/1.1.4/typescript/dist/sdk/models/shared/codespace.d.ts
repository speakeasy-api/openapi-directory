import { SpeakeasyBase } from "../../../internal/utils";
import { MinimalRepository } from "./minimalrepository";
import { NullableCodespaceMachine } from "./nullablecodespacemachine";
import { SimpleUser } from "./simpleuser";
/**
 * Details about the codespace's git repository.
 */
export declare class CodespaceGitStatus extends SpeakeasyBase {
    /**
     * The number of commits the local repository is ahead of the remote.
     */
    ahead?: number;
    /**
     * The number of commits the local repository is behind the remote.
     */
    behind?: number;
    /**
     * Whether the local repository has uncommitted changes.
     */
    hasUncommittedChanges?: boolean;
    /**
     * Whether the local repository has unpushed changes.
     */
    hasUnpushedChanges?: boolean;
    /**
     * The current branch (or SHA if in detached HEAD state) of the local repository.
     */
    ref?: string;
}
/**
 * The Azure region where this codespace is located.
 */
export declare enum CodespaceLocationEnum {
    EastUs = "EastUs",
    SouthEastAsia = "SouthEastAsia",
    WestEurope = "WestEurope",
    WestUs2 = "WestUs2"
}
export declare class CodespaceRuntimeConstraints extends SpeakeasyBase {
    /**
     * The privacy settings a user can select from when forwarding a port.
     */
    allowedPortPrivacySettings?: string[];
}
/**
 * State of this codespace.
 */
export declare enum CodespaceStateEnum {
    Unknown = "Unknown",
    Created = "Created",
    Queued = "Queued",
    Provisioning = "Provisioning",
    Available = "Available",
    Awaiting = "Awaiting",
    Unavailable = "Unavailable",
    Deleted = "Deleted",
    Moved = "Moved",
    Shutdown = "Shutdown",
    Archived = "Archived",
    Starting = "Starting",
    ShuttingDown = "ShuttingDown",
    Failed = "Failed",
    Exporting = "Exporting",
    Updating = "Updating",
    Rebuilding = "Rebuilding"
}
/**
 * A codespace.
 */
export declare class Codespace extends SpeakeasyBase {
    /**
     * A GitHub user.
     */
    billableOwner: SimpleUser;
    createdAt: Date;
    /**
     * Path to devcontainer.json from repo root used to create Codespace.
     */
    devcontainerPath?: string;
    /**
     * Display name for this codespace.
     */
    displayName?: string;
    /**
     * UUID identifying this codespace's environment.
     */
    environmentId: string;
    /**
     * Details about the codespace's git repository.
     */
    gitStatus: CodespaceGitStatus;
    id: number;
    /**
     * The number of minutes of inactivity after which this codespace will be automatically stopped.
     */
    idleTimeoutMinutes: number;
    /**
     * Text to show user when codespace idle timeout minutes has been overriden by an organization policy
     */
    idleTimeoutNotice?: string;
    /**
     * The text to display to a user when a codespace has been stopped for a potentially actionable reason.
     */
    lastKnownStopNotice?: string;
    /**
     * Last known time this codespace was started.
     */
    lastUsedAt: Date;
    /**
     * The Azure region where this codespace is located.
     */
    location: CodespaceLocationEnum;
    /**
     * A description of the machine powering a codespace.
     */
    machine: NullableCodespaceMachine;
    /**
     * API URL to access available alternate machine types for this codespace.
     */
    machinesUrl: string;
    /**
     * Automatically generated name of this codespace.
     */
    name: string;
    /**
     * A GitHub user.
     */
    owner: SimpleUser;
    /**
     * Whether or not a codespace has a pending async operation. This would mean that the codespace is temporarily unavailable. The only thing that you can do with a codespace in this state is delete it.
     */
    pendingOperation?: boolean;
    /**
     * Text to show user when codespace is disabled by a pending operation
     */
    pendingOperationDisabledReason?: string;
    /**
     * Whether the codespace was created from a prebuild.
     */
    prebuild: boolean;
    /**
     * API URL to publish this codespace to a new repository.
     */
    publishUrl?: string;
    /**
     * API URL for the Pull Request associated with this codespace, if any.
     */
    pullsUrl: string;
    recentFolders: string[];
    /**
     * Minimal Repository
     */
    repository: MinimalRepository;
    /**
     * When a codespace will be auto-deleted based on the "retention_period_minutes" and "last_used_at"
     */
    retentionExpiresAt?: Date;
    /**
     * Duration in minutes after codespace has gone idle in which it will be deleted. Must be integer minutes between 0 and 43200 (30 days).
     */
    retentionPeriodMinutes?: number;
    runtimeConstraints?: CodespaceRuntimeConstraints;
    /**
     * API URL to start this codespace.
     */
    startUrl: string;
    /**
     * State of this codespace.
     */
    state: CodespaceStateEnum;
    /**
     * API URL to stop this codespace.
     */
    stopUrl: string;
    updatedAt: Date;
    /**
     * API URL for this codespace.
     */
    url: string;
    /**
     * URL to access this codespace on the web.
     */
    webUrl: string;
}
