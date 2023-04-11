import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { Transaction } from "./transaction";
/**
 * OK - the request has succeeded.
 */
export declare class TransactionSearchResponse extends SpeakeasyBase {
    links?: Links;
    /**
     * Contains the transactions that match the query parameters.
     */
    data?: Transaction[];
}
