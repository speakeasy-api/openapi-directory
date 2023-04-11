import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Filter event type ("spiders"/"uniques"/"nonuniques"/"conversions")
 */
export declare enum ClickStreamGetFilterEnum {
    Unknown = "",
    Spiders = "spiders",
    Uniques = "uniques",
    Nonuniques = "nonuniques",
    Conversions = "conversions"
}
export declare class ClickStreamGetRequest extends SpeakeasyBase {
    /**
     * Filter by this conversion id (mutually exclusive with "datapoint" and "group")
     */
    conversion?: number;
    /**
     * Filter by this datapoint id (mutually exclusive with "group" and "conversion")
     */
    datapoint?: number;
    /**
     * Filter event type ("spiders"/"uniques"/"nonuniques"/"conversions")
     */
    filter?: ClickStreamGetFilterEnum;
    /**
     * Filter by this group id (mutually exclusive with "datapoint" and "conversion")
     */
    group?: number;
    /**
     * Limit results to this number
     */
    pageSize?: number;
}
export declare class ClickStreamGetResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreDtoClickStreamHit?: shared.ApiCoreResponsesEntitiesResponseApiCoreDtoClickStreamHit;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
