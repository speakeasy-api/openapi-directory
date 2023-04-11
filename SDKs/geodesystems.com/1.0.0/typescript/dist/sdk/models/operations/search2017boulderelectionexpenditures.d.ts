import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class Search2017BoulderElectionExpendituresRequest extends SpeakeasyBase {
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
     * City
     */
    searchDb2017BoulderElectionExpendituresCity?: string;
    /**
     * Committee
     */
    searchDb2017BoulderElectionExpendituresCommittee?: string;
    /**
     * Expenditure
     */
    searchDb2017BoulderElectionExpendituresExpenditure?: number;
    /**
     * Name
     */
    searchDb2017BoulderElectionExpendituresName?: string;
    /**
     * Purpose
     */
    searchDb2017BoulderElectionExpendituresPurpose?: string;
    /**
     * State
     */
    searchDb2017BoulderElectionExpendituresState?: string;
    /**
     * Street
     */
    searchDb2017BoulderElectionExpendituresStreet?: string;
    /**
     * Transaction Date
     */
    searchDb2017BoulderElectionExpendituresTransactionDate?: string;
    /**
     * Zip
     */
    searchDb2017BoulderElectionExpendituresZip?: string;
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
export declare class Search2017BoulderElectionExpendituresResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
