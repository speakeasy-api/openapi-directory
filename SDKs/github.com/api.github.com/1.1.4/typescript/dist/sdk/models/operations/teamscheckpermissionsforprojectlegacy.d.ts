import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsCheckPermissionsForProjectLegacyRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the project.
     */
    projectId: number;
    /**
     * The unique identifier of the team.
     */
    teamId: number;
}
export declare class TeamsCheckPermissionsForProjectLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    teamProject?: shared.TeamProject;
}
