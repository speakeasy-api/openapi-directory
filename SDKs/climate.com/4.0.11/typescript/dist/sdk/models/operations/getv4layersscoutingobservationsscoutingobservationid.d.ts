import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetV4LayersScoutingObservationsScoutingObservationIdSecurity extends SpeakeasyBase {
    apiKey?: string;
    oauth2AuthorizationCode?: string;
}
export declare class GetV4LayersScoutingObservationsScoutingObservationIdRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the Scouting Observation.
     */
    scoutingObservationId: string;
}
export declare class GetV4LayersScoutingObservationsScoutingObservationIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Input
     */
    error?: shared.ErrorT;
    headers?: Record<string, string[]>;
    /**
     * Returns the requested scouting observation.
     */
    scoutingObservation?: shared.ScoutingObservation;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
