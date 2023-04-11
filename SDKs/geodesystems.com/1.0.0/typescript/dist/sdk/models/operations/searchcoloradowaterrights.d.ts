import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SearchColoradoWaterRightsRequest extends SpeakeasyBase {
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
     * Adjudication Date
     */
    searchDbColoradoWaterRightsAdjudicationDate?: string;
    /**
     * Appropriation Date
     */
    searchDbColoradoWaterRightsAppropriationDate?: string;
    /**
     * Comments
     */
    searchDbColoradoWaterRightsComments?: string;
    /**
     * County
     */
    searchDbColoradoWaterRightsCounty?: string;
    /**
     * Decreed Units
     */
    searchDbColoradoWaterRightsDecreedUnits?: string;
    /**
     * Decreed Uses
     */
    searchDbColoradoWaterRightsDecreedUses?: string;
    /**
     * Location
     */
    searchDbColoradoWaterRightsLocation?: string;
    /**
     * More Information
     */
    searchDbColoradoWaterRightsMoreInformation?: string;
    /**
     * Net Absolute
     */
    searchDbColoradoWaterRightsNetAbsolute?: number;
    /**
     * Net Apex Absolute
     */
    searchDbColoradoWaterRightsNetApexAbsolute?: number;
    /**
     * Net Apex Conditional
     */
    searchDbColoradoWaterRightsNetApexConditional?: number;
    /**
     * Net Conditional
     */
    searchDbColoradoWaterRightsNetConditional?: number;
    /**
     * Priority No
     */
    searchDbColoradoWaterRightsPriorityNo?: string;
    /**
     * Seasonal Limits
     */
    searchDbColoradoWaterRightsSeasonalLimits?: string;
    /**
     * Structure Name
     */
    searchDbColoradoWaterRightsStructureName?: string;
    /**
     * Structure Type
     */
    searchDbColoradoWaterRightsStructureType?: string;
    /**
     * Water Source
     */
    searchDbColoradoWaterRightsWaterSource?: string;
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
export declare class SearchColoradoWaterRightsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
