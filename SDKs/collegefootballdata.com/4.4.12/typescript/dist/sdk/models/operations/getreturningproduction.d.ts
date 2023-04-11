import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetReturningProductionRequest extends SpeakeasyBase {
    /**
     * Conference abbreviation filter
     */
    conference?: string;
    /**
     * Team filter
     */
    team?: string;
    /**
     * Year filter
     */
    year?: number;
}
export declare class GetReturningProductionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    returningProductions?: shared.ReturningProduction[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
