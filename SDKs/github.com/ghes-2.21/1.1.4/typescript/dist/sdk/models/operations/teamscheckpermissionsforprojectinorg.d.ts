import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsCheckPermissionsForProjectInOrgRequest extends SpeakeasyBase {
    org: string;
    projectId: number;
    /**
     * team_slug parameter
     */
    teamSlug: string;
}
export declare class TeamsCheckPermissionsForProjectInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    teamProject?: shared.TeamProject;
}
