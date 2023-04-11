import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetStateElectionOfficeRequest extends SpeakeasyBase {
    /**
     *
     * @remarks
     * API key for https://api.data.gov. Get one at https://api.data.gov/signup.
     *
     */
    apiKey: string;
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
    /**
     *
     * @remarks
     * Enter a state (Ex: AK, TX, VA etc..) to find the local election offices contact
     * information.
     *
     *
     */
    state: string;
}
export declare class GetStateElectionOfficeResponse extends SpeakeasyBase {
    contentType: string;
    stateElectionOfficeInfoPage?: shared.StateElectionOfficeInfoPage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
