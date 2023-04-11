import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CodespacesCreateWithPrForAuthenticatedUserRequestBody extends SpeakeasyBase {
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
     * Duration in minutes after codespace has gone idle in which it will be deleted. Must be integer minutes between 0 and 43200 (30 days).
     */
    retentionPeriodMinutes?: number;
    /**
     * Working directory for this codespace
     */
    workingDirectory?: string;
}
export declare class CodespacesCreateWithPrForAuthenticatedUserRequest extends SpeakeasyBase {
    requestBody: CodespacesCreateWithPrForAuthenticatedUserRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The number that identifies the pull request.
     */
    pullNumber: number;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
/**
 * Service unavailable
 */
export declare class CodespacesCreateWithPrForAuthenticatedUser503ApplicationJSON extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class CodespacesCreateWithPrForAuthenticatedUserResponse extends SpeakeasyBase {
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
    codespacesCreateWithPrForAuthenticatedUser503ApplicationJSONObject?: CodespacesCreateWithPrForAuthenticatedUser503ApplicationJSON;
}
