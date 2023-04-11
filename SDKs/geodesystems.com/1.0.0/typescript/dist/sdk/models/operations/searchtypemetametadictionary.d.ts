import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SearchTypeMetametaDictionaryRequest extends SpeakeasyBase {
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
     * Type
     */
    searchTypeMetametaDictionaryDictionaryType?: string;
    /**
     * Index
     */
    searchTypeMetametaDictionaryFieldIndex?: number;
    /**
     * Handler Class
     */
    searchTypeMetametaDictionaryHandlerClass?: string;
    /**
     * Is Group
     */
    searchTypeMetametaDictionaryIsgroup?: boolean;
    /**
     * Properties
     */
    searchTypeMetametaDictionaryProperties?: string;
    /**
     * Short Name
     */
    searchTypeMetametaDictionaryShortName?: string;
    /**
     * Super Type
     */
    searchTypeMetametaDictionarySuperType?: string;
    /**
     * Wiki Text
     */
    searchTypeMetametaDictionaryWikiText?: string;
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
export declare class SearchTypeMetametaDictionaryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
