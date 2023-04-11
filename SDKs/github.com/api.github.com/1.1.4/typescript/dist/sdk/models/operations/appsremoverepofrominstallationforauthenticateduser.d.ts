import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppsRemoveRepoFromInstallationForAuthenticatedUserRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the installation.
     */
    installationId: number;
    /**
     * The unique identifier of the repository.
     */
    repositoryId: number;
}
export declare class AppsRemoveRepoFromInstallationForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
}
