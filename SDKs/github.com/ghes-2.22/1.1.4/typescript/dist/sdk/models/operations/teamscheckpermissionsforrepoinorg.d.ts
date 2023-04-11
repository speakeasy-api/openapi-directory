import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsCheckPermissionsForRepoInOrgRequest extends SpeakeasyBase {
    org: string;
    owner: string;
    repo: string;
    /**
     * team_slug parameter
     */
    teamSlug: string;
}
export declare class TeamsCheckPermissionsForRepoInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Alternative response with repository permissions
     */
    teamRepository?: shared.TeamRepository;
}
