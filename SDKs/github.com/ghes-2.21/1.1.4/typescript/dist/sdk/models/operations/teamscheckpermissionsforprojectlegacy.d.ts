import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsCheckPermissionsForProjectLegacyRequest extends SpeakeasyBase {
    projectId: number;
    teamId: number;
}
/**
 * Preview header missing
 */
export declare class TeamsCheckPermissionsForProjectLegacy415ApplicationJSON extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class TeamsCheckPermissionsForProjectLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    teamProject?: shared.TeamProject;
    /**
     * Preview header missing
     */
    teamsCheckPermissionsForProjectLegacy415ApplicationJSONObject?: TeamsCheckPermissionsForProjectLegacy415ApplicationJSON;
}
