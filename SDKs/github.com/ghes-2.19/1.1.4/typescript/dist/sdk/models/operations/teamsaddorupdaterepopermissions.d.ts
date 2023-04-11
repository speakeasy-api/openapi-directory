import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The permission to grant the team on this repository. Can be one of:
 *
 * @remarks
 * \* `pull` - team members can pull, but not push to or administer this repository.
 * \* `push` - team members can pull and push, but not administer this repository.
 * \* `admin` - team members can pull, push and administer this repository.
 *
 * If no permission is specified, the team's `permission` attribute will be used to determine what permission to grant the team on this repository.
 * **Note**: If you pass the `hellcat-preview` media type, you can promote—but not demote—a `permission` attribute inherited through a parent team.
 */
export declare enum TeamsAddOrUpdateRepoPermissionsRequestBodyPermissionEnum {
    Pull = "pull",
    Push = "push",
    Admin = "admin"
}
export declare class TeamsAddOrUpdateRepoPermissionsRequestBody extends SpeakeasyBase {
    /**
     * The permission to grant the team on this repository. Can be one of:
     *
     * @remarks
     * \* `pull` - team members can pull, but not push to or administer this repository.
     * \* `push` - team members can pull and push, but not administer this repository.
     * \* `admin` - team members can pull, push and administer this repository.
     *
     * If no permission is specified, the team's `permission` attribute will be used to determine what permission to grant the team on this repository.
     * **Note**: If you pass the `hellcat-preview` media type, you can promote—but not demote—a `permission` attribute inherited through a parent team.
     */
    permission?: TeamsAddOrUpdateRepoPermissionsRequestBodyPermissionEnum;
}
export declare class TeamsAddOrUpdateRepoPermissionsRequest extends SpeakeasyBase {
    requestBody?: TeamsAddOrUpdateRepoPermissionsRequestBody;
    owner: string;
    repo: string;
    teamId: number;
}
export declare class TeamsAddOrUpdateRepoPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
