import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SearchTypePointGeomagIaga2002Request extends SpeakeasyBase {
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
     * Data Interval
     */
    searchTypePointGeomagIaga2002DataInterval?: string;
    /**
     * Data Type
     */
    searchTypePointGeomagIaga2002DataType?: string;
    /**
     * Digital Sampling
     */
    searchTypePointGeomagIaga2002DigitalSampling?: string;
    /**
     * IAGA Code
     */
    searchTypePointGeomagIaga2002IagaCode?: string;
    /**
     * Source of data
     */
    searchTypePointGeomagIaga2002SourceOfData?: string;
    /**
     * Station Name
     */
    searchTypePointGeomagIaga2002StationName?: string;
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
export declare class SearchTypePointGeomagIaga2002Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
