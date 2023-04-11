import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TeamsRemoveProjectInOrgRequest extends SpeakeasyBase {
    org: string;
    projectId: number;
    /**
     * team_slug parameter
     */
    teamSlug: string;
}
export declare class TeamsRemoveProjectInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
