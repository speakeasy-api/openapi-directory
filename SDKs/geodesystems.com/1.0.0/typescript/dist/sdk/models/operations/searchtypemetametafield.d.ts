import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SearchTypeMetametaFieldRequest extends SpeakeasyBase {
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
     * Database Column Size
     */
    searchTypeMetametaFieldDatabaseColumnSize?: number;
    /**
     * Data Type
     */
    searchTypeMetametaFieldDatatype?: string;
    /**
     * Enumeration Values
     */
    searchTypeMetametaFieldEnumerationValues?: string;
    /**
     * Field ID
     */
    searchTypeMetametaFieldFieldId?: string;
    /**
     * Index
     */
    searchTypeMetametaFieldFieldIndex?: number;
    /**
     * Missing Value
     */
    searchTypeMetametaFieldMissing?: string;
    /**
     * Properties
     */
    searchTypeMetametaFieldProperties?: string;
    /**
     * Unit
     */
    searchTypeMetametaFieldUnit?: string;
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
export declare class SearchTypeMetametaFieldResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
