import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsCheckPermissionsForProjectLegacyRequest extends SpeakeasyBase {
    projectId: number;
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
