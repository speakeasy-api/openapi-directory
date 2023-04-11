import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CodespacesPreFlightWithRepoForAuthenticatedUserRequest extends SpeakeasyBase {
    /**
     * An alternative IP for default location auto-detection, such as when proxying a request.
     */
    clientIp?: string;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The branch or commit to check for a default devcontainer path. If not specified, the default branch will be checked.
     */
    ref?: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class CodespacesPreFlightWithRepoForAuthenticatedUser200ApplicationJSONDefaults extends SpeakeasyBase {
    devcontainerPath: string;
    location: string;
}
/**
 * Response when a user is able to create codespaces from the repository.
 */
export declare class CodespacesPreFlightWithRepoForAuthenticatedUser200ApplicationJSON extends SpeakeasyBase {
    /**
     * A GitHub user.
     */
    billableOwner?: shared.SimpleUser;
    defaults?: CodespacesPreFlightWithRepoForAuthenticatedUser200ApplicationJSONDefaults;
}
export declare class CodespacesPreFlightWithRepoForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
    /**
     * Response when a user is able to create codespaces from the repository.
     */
    codespacesPreFlightWithRepoForAuthenticatedUser200ApplicationJSONObject?: CodespacesPreFlightWithRepoForAuthenticatedUser200ApplicationJSON;
}
