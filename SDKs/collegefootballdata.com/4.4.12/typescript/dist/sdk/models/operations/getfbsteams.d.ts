import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFbsTeamsRequest extends SpeakeasyBase {
    /**
     * Year filter
     */
    year?: number;
}
export declare class GetFbsTeamsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    teams?: shared.Team[];
}
