import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetPresidentialContributionsBySizeSizeEnum {
    Zero = "0",
    TwoHundred = "200",
    FiveHundred = "500",
    OneThousand = "1000",
    TwoThousand = "2000"
}
export declare class GetPresidentialContributionsBySizeRequest extends SpeakeasyBase {
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
     * A unique identifier assigned to each candidate registered with the FEC.
     * If a person runs for several offices, that person will have separate candidate IDs for each office.
     *   -P00000001    All candidates
     *   -P00000002    Democrasts
     *   -P00000003    Republicans
     *
     */
    candidateId?: string[];
    /**
     * Year of election
     */
    electionYear?: number[];
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
     * The total all contributions in the following ranges:
     * ```
     *   -0    $200 and under
     *   -200  $200.01 - $499.99
     *   -500  $500 - $999.99
     *   -1000 $1000 - $1999.99
     *   -2000 $2000 +
     * ```
     * Unitemized contributions are included in the `0` category.
     *
     */
    size?: GetPresidentialContributionsBySizeSizeEnum[];
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
export declare class GetPresidentialContributionsBySizeResponse extends SpeakeasyBase {
    contentType: string;
    presidentialBySizePage?: shared.PresidentialBySizePage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
