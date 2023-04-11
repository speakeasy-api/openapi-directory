import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The permission to grant the team on this repository. Can be one of:
 *
 * @remarks
 * \* `pull` - team members can pull, but not push to or administer this repository.
 * \* `push` - team members can pull and push, but not administer this repository.
 * \* `admin` - team members can pull, push and administer this repository.
 * \* `maintain` - team members can manage the repository without access to sensitive or destructive actions. Recommended for project managers. Only applies to repositories owned by organizations.
 * \* `triage` - team members can proactively manage issues and pull requests without write access. Recommended for contributors who triage a repository. Only applies to repositories owned by organizations.
 *
 * If no permission is specified, the team's `permission` attribute will be used to determine what permission to grant the team on this repository.
 */
export declare enum TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnum {
    Pull = "pull",
    Push = "push",
    Admin = "admin",
    Maintain = "maintain",
    Triage = "triage"
}
export declare class TeamsAddOrUpdateRepoPermissionsInOrgRequestBody extends SpeakeasyBase {
    /**
     * The permission to grant the team on this repository. Can be one of:
     *
     * @remarks
     * \* `pull` - team members can pull, but not push to or administer this repository.
     * \* `push` - team members can pull and push, but not administer this repository.
     * \* `admin` - team members can pull, push and administer this repository.
     * \* `maintain` - team members can manage the repository without access to sensitive or destructive actions. Recommended for project managers. Only applies to repositories owned by organizations.
     * \* `triage` - team members can proactively manage issues and pull requests without write access. Recommended for contributors who triage a repository. Only applies to repositories owned by organizations.
     *
     * If no permission is specified, the team's `permission` attribute will be used to determine what permission to grant the team on this repository.
     */
    permission?: TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnum;
}
export declare class TeamsAddOrUpdateRepoPermissionsInOrgRequest extends SpeakeasyBase {
    requestBody?: TeamsAddOrUpdateRepoPermissionsInOrgRequestBody;
    org: string;
    owner: string;
    repo: string;
    /**
     * team_slug parameter
     */
    teamSlug: string;
}
export declare class TeamsAddOrUpdateRepoPermissionsInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
