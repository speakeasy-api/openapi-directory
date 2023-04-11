import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TeamsCheckPermissionsForRepoRequest extends SpeakeasyBase {
    owner: string;
    repo: string;
    teamId: number;
}
export declare class TeamsCheckPermissionsForRepoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Alternative response with extra repository information
     */
    fullRepository?: shared.FullRepository;
    /**
     * Alternative response with extra repository information
     */
    minimalRepository?: shared.MinimalRepository;
}
