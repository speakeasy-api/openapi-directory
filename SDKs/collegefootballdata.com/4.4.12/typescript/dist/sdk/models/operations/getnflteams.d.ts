import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetNFLTeamsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    draftTeams?: shared.DraftTeam[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
