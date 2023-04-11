import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The permission to grant the team on this repository. If no permission is specified, the team's `permission` attribute will be used to determine what permission to grant the team on this repository.
 */
export declare enum TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnum {
    Pull = "pull",
    Push = "push",
    Admin = "admin"
}
export declare class TeamsAddOrUpdateRepoPermissionsLegacyRequestBody extends SpeakeasyBase {
    /**
     * The permission to grant the team on this repository. If no permission is specified, the team's `permission` attribute will be used to determine what permission to grant the team on this repository.
     */
    permission?: TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnum;
}
export declare class TeamsAddOrUpdateRepoPermissionsLegacyRequest extends SpeakeasyBase {
    requestBody?: TeamsAddOrUpdateRepoPermissionsLegacyRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
    /**
     * The unique identifier of the team.
     */
    teamId: number;
}
export declare class TeamsAddOrUpdateRepoPermissionsLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
