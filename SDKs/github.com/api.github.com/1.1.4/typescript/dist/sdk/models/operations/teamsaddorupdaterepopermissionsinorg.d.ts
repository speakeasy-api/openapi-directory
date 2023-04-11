import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TeamsAddOrUpdateRepoPermissionsInOrgRequestBody extends SpeakeasyBase {
    /**
     * The permission to grant the team on this repository. We accept the following permissions to be set: `pull`, `triage`, `push`, `maintain`, `admin` and you can also specify a custom repository role name, if the owning organization has defined any. If no permission is specified, the team's `permission` attribute will be used to determine what permission to grant the team on this repository.
     */
    permission?: string;
}
export declare class TeamsAddOrUpdateRepoPermissionsInOrgRequest extends SpeakeasyBase {
    requestBody?: TeamsAddOrUpdateRepoPermissionsInOrgRequestBody;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
    /**
     * The slug of the team name.
     */
    teamSlug: string;
}
export declare class TeamsAddOrUpdateRepoPermissionsInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
