import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SearchTypeBlsSeriesRequest extends SpeakeasyBase {
    /**
     * Archive change date from
     */
    changedateFrom?: Date;
    /**
     * Archive change date to
     */
    changedateTo?: Date;
    /**
     * Archive create date from
     */
    createdateFrom?: Date;
    /**
     * Archive create date to
     */
    createdateTo?: Date;
    /**
     * Search description
     */
    description?: string;
    /**
     * File suffix
     */
    filesuffix?: string;
    /**
     * From date
     */
    fromdate?: Date;
    /**
     * Parent entry
     */
    group?: string;
    /**
     * Max number of results
     */
    max?: number;
    /**
     * Northern bounds of search
     */
    maxlatitude?: number;
    /**
     * Eastern bounds of search
     */
    maxlongitude?: number;
    /**
     * Southern bounds of search
     */
    minlatitude?: number;
    /**
     * Western bounds of search
     */
    minlongitude?: number;
    /**
     * Search name
     */
    name?: string;
    /**
     * Area
     */
    searchTypeBlsSeriesArea?: string;
    /**
     * Industry
     */
    searchTypeBlsSeriesIndustry?: string;
    /**
     * Item
     */
    searchTypeBlsSeriesItem?: string;
    /**
     * Measure Data Type
     */
    searchTypeBlsSeriesMeasureDataType?: string;
    /**
     * Seasonality
     */
    searchTypeBlsSeriesSeasonality?: string;
    /**
     * Sector
     */
    searchTypeBlsSeriesSector?: string;
    /**
     * Survey Name
     */
    searchTypeBlsSeriesSurveyName?: string;
    /**
     * Number to skip
     */
    skip?: number;
    /**
     * Search text
     */
    text?: string;
    /**
     * To date
     */
    todate?: Date;
}
export declare class SearchTypeBlsSeriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
