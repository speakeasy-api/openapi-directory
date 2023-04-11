import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRosterRequest extends SpeakeasyBase {
    /**
     * Team name
     */
    team?: string;
    /**
     * Season year
     */
    year?: number;
}
export declare class GetRosterResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    players?: shared.Player[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
