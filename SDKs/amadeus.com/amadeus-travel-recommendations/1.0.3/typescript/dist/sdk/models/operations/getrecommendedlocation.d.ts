import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRecommendedLocationRequest extends SpeakeasyBase {
    /**
     * City used by the algorythm to recommend new destination. Several cities can be specified using comma.
     *
     * @remarks
     *
     * City codes follow [IATA standard](http://www.iata.org/publications/Pages/code-search.aspx)
     */
    cityCodes: string;
    /**
     * List of country the traveler want to visit, separated with comma.
     *
     * @remarks
     *
     * Country codes follow [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code format (e.g. US)
     */
    destinationCountryCodes?: string;
    /**
     * Origin country of the traveler following [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code format (e.g. US)
     */
    travelerCountryCode?: string;
}
/**
 * Successful reply
 */
export declare class GetRecommendedLocation200ApplicationVndAmadeusPlusJson extends SpeakeasyBase {
    data?: shared.RecommendedLocation[];
    /**
     * Meta information about the returned object(s) in "data"
     */
    meta?: shared.Meta;
    warnings?: shared.Warning[];
}
export declare class GetRecommendedLocationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * code    | title
     *
     * @remarks
     * ------- | -------------------------------------
     * 477     | INVALID FORMAT
     * 572     | INVALID OPTION
     * 32171   | MANDATORY DATA MISSING
     */
    error400?: shared.Error400;
    /**
     * Internal Server Error
     */
    error500?: shared.Error500;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful reply
     */
    getRecommendedLocation200ApplicationVndAmadeusPlusJsonObject?: GetRecommendedLocation200ApplicationVndAmadeusPlusJson;
}
