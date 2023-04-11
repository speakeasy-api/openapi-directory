import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsSecurity extends SpeakeasyBase {
    apiKey?: string;
    oauth2AuthorizationCode?: string;
}
export declare class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsRequest extends SpeakeasyBase {
    /**
     * Max number of results to return per batch.  Must be between 1 and 100 inclusive.  Defaults to 100.
     */
    xLimit?: number;
    /**
     * Opaque string which allows for fetching the next batch of results.  Can be used to poll for changes.
     */
    xNextToken?: string;
    /**
     * Unique identifier of the Scouting Observation.
     */
    scoutingObservationId: string;
}
export declare class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not Modified
     */
    empty?: Record<string, any>;
    /**
     * Bad Input
     */
    error?: shared.ErrorT;
    headers?: Record<string, string[]>;
    /**
     * OK
     */
    scoutingObservationAttachments?: shared.ScoutingObservationAttachments;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
