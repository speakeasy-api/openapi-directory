import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Pull request number for this codespace
 */
export declare class CodespacesCreateForAuthenticatedUserRequestBody2PullRequest extends SpeakeasyBase {
    /**
     * Pull request number
     */
    pullRequestNumber: number;
    /**
     * Repository id for this codespace
     */
    repositoryId: number;
}
export declare class CodespacesCreateForAuthenticatedUserRequestBody2 extends SpeakeasyBase {
    /**
     * Path to devcontainer.json config to use for this codespace
     */
    devcontainerPath?: string;
    /**
     * Time in minutes before codespace stops from inactivity
     */
    idleTimeoutMinutes?: number;
    /**
     * Location for this codespace. Assigned by IP if not provided
     */
    location?: string;
    /**
     * Machine type to use for this codespace
     */
    machine?: string;
    /**
     * Pull request number for this codespace
     */
    pullRequest: CodespacesCreateForAuthenticatedUserRequestBody2PullRequest;
    /**
     * Working directory for this codespace
     */
    workingDirectory?: string;
}
export declare class CodespacesCreateForAuthenticatedUserRequestBody1 extends SpeakeasyBase {
    /**
     * IP for location auto-detection when proxying a request
     */
    clientIp?: string;
    /**
     * Path to devcontainer.json config to use for this codespace
     */
    devcontainerPath?: string;
    /**
     * Display name for this codespace
     */
    displayName?: string;
    /**
     * Time in minutes before codespace stops from inactivity
     */
    idleTimeoutMinutes?: number;
    /**
     * Location for this codespace. Assigned by IP if not provided
     */
    location?: string;
    /**
     * Machine type to use for this codespace
     */
    machine?: string;
    /**
     * Whether to authorize requested permissions from devcontainer.json
     */
    multiRepoPermissionsOptOut?: boolean;
    /**
     * Git ref (typically a branch name) for this codespace
     */
    ref?: string;
    /**
     * Repository id for this codespace
     */
    repositoryId: number;
    /**
     * Duration in minutes after codespace has gone idle in which it will be deleted. Must be integer minutes between 0 and 43200 (30 days).
     */
    retentionPeriodMinutes?: number;
    /**
     * Working directory for this codespace
     */
    workingDirectory?: string;
}
/**
 * Service unavailable
 */
export declare class CodespacesCreateForAuthenticatedUser503ApplicationJSON extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class CodespacesCreateForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
    /**
     * Response when the codespace was successfully created
     */
    codespace?: shared.Codespace;
    /**
     * Service unavailable
     */
    codespacesCreateForAuthenticatedUser503ApplicationJSONObject?: CodespacesCreateForAuthenticatedUser503ApplicationJSON;
}
