import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SearchFlightOffersRequest extends SpeakeasyBase {
    /**
     * list of criteria to retrieve a list of flight offers
     */
    getFlightOffersQuery: shared.GetFlightOffersQuery;
    /**
     * the HTTP method to apply
     */
    xHTTPMethodOverride: string;
}
/**
 * Successful Operation
 */
export declare class SearchFlightOffersSuccess extends SpeakeasyBase {
    data: shared.FlightOffer[];
    dictionaries?: shared.Dictionaries;
    meta?: shared.CollectionMeta;
    warnings?: shared.Issue[];
}
export declare class SearchFlightOffersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * code    | title
     *
     * @remarks
     * ------- | -------------------------------------
     * 425     | INVALID DATE
     * 477     | INVALID FORMAT
     * 2668    | PARAMETER COMBINATION INVALID/RESTRICTED
     * 4926    | INVALID DATA RECEIVED
     * 10661   | MAXIMUM NUMBER OF OCCURRENCES EXCEEDED
     * 32171   | MANDATORY DATA MISSING
     *
     */
    error400?: shared.Error400;
    /**
     * Unexpected error
     */
    error500?: shared.Error500;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful Operation
     */
    success?: SearchFlightOffersSuccess;
}
