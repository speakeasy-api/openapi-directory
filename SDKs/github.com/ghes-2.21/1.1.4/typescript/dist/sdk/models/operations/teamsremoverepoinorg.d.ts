import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TeamsRemoveRepoInOrgRequest extends SpeakeasyBase {
    org: string;
    owner: string;
    repo: string;
    /**
     * team_slug parameter
     */
    teamSlug: string;
}
export declare class TeamsRemoveRepoInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
