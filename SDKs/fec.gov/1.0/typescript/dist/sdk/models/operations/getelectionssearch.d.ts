import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetElectionsSearchOfficeEnum {
    House = "house",
    Senate = "senate",
    President = "president"
}
export declare class GetElectionsSearchRequest extends SpeakeasyBase {
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
     * Two-year election cycle in which a candidate runs for office.
     * Calculated from Form 2. The cycle begins with
     * an odd year and is named for its ending, even year. This cycle follows
     * the traditional house election cycle and subdivides the presidential
     * and Senate elections into comparable two-year blocks. To retrieve data for
     * the entire four years of a presidential term or six years of a senatorial term,
     * you will need the `election_full` flag.
     *
     */
    cycle?: number[];
    /**
     * Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
     */
    district?: string[];
    office?: GetElectionsSearchOfficeEnum[];
    /**
     * For paginating through results, starting at page 1
     */
    page?: number;
    /**
     * The number of results returned per page. Defaults to 20.
     */
    perPage?: number;
    /**
     *
     * @remarks
     * Provide a field to sort by. Use `-` for descending order. ex: `-case_no`
     *
     */
    sort?: string[];
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
    /**
     * US state or territory where a candidate runs for office
     */
    state?: string[];
    /**
     * Zip code
     */
    zip?: number[];
}
export declare class GetElectionsSearchResponse extends SpeakeasyBase {
    contentType: string;
    electionsListPage?: shared.ElectionsListPage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
