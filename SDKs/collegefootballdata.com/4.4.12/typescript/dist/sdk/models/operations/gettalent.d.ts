import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTalentRequest extends SpeakeasyBase {
    /**
     * Year filter
     */
    year?: number;
}
export declare class GetTalentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    teamTalents?: shared.TeamTalent[];
}
