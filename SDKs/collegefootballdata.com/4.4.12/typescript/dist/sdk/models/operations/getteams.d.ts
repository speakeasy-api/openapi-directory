import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTeamsRequest extends SpeakeasyBase {
    /**
     * Conference abbreviation filter
     */
    conference?: string;
}
export declare class GetTeamsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    teams?: shared.Team[];
}
