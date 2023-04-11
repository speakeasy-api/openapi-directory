import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetElectionDatesOfficeSoughtEnum {
    H = "H",
    S = "S",
    P = "P"
}
export declare class GetElectionDatesRequest extends SpeakeasyBase {
    /**
     *
     * @remarks
     * API key for https://api.data.gov. Get one at https://api.data.gov/signup.
     *
     */
    apiKey: string;
    /**
     *
     * @remarks
     * House district of the office sought, if applicable.
     *
     */
    electionDistrict?: string[];
    /**
     *
     * @remarks
     * Party, if applicable.
     *
     */
    electionParty?: string[];
    /**
     *
     * @remarks
     * State or territory of the office sought.
     *
     */
    electionState?: string[];
    /**
     *
     * @remarks
     * Election type id
     *
     */
    electionTypeId?: string[];
    /**
     * Year of election
     */
    electionYear?: string[];
    /**
     *
     * @remarks
     * The maximum date this record was added to the system.(MM/DD/YYYY or YYYY-MM-DD)
     *
     */
    maxCreateDate?: Date;
    /**
     *
     * @remarks
     * The maximum date of election.
     *
     */
    maxElectionDate?: Date;
    /**
     *
     * @remarks
     * The maximum date of primary or general election.(MM/DD/YYYY or YYYY-MM-DD)
     *
     */
    maxPrimaryGeneralDate?: Date;
    /**
     *
     * @remarks
     * The maximum date this record was last updated.(MM/DD/YYYY or YYYY-MM-DD)
     *
     */
    maxUpdateDate?: Date;
    /**
     *
     * @remarks
     * The minimum date this record was added to the system.(MM/DD/YYYY or YYYY-MM-DD)
     *
     */
    minCreateDate?: Date;
    /**
     *
     * @remarks
     * The minimum date of election.
     *
     */
    minElectionDate?: Date;
    /**
     *
     * @remarks
     * The minimum date of primary or general election.(MM/DD/YYYY or YYYY-MM-DD)
     *
     */
    minPrimaryGeneralDate?: Date;
    /**
     *
     * @remarks
     * The minimum date this record was last updated.(MM/DD/YYYY or YYYY-MM-DD)
     *
     */
    minUpdateDate?: Date;
    /**
     *
     * @remarks
     * House, Senate or presidential office.
     *
     */
    officeSought?: GetElectionDatesOfficeSoughtEnum[];
    /**
     * For paginating through results, starting at page 1
     */
    page?: number;
    /**
     * The number of results returned per page. Defaults to 20.
     */
    perPage?: number;
    /**
     * Provide a field to sort by. Use `-` for descending order.
     *
     * @remarks
     *
     */
    sort?: string;
    /**
     * Hide null values on sorted column(s).
     */
    sortHideNull?: boolean;
    /**
     * Toggle that filters out all rows having sort column that is non-null
     */
    sortNullOnly?: boolean;
    /**
     * Toggle that sorts null values last
     */
    sortNullsLast?: boolean;
}
export declare class GetElectionDatesDefaultApplicationJSON extends SpeakeasyBase {
    pagination?: shared.OffsetInfo;
    results?: shared.ElectionDate[];
}
export declare class GetElectionDatesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getElectionDatesDefaultApplicationJSONObject?: GetElectionDatesDefaultApplicationJSON;
}
