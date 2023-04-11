import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsCheckPermissionsForRepoLegacyRequest extends SpeakeasyBase {
    owner: string;
    repo: string;
    teamId: number;
}
export declare class TeamsCheckPermissionsForRepoLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Alternative response with extra repository information
     */
    teamRepository?: shared.TeamRepository;
}
