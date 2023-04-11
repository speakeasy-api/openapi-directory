import { SpeakeasyBase } from "../../../internal/utils";
import { RateTable } from "./ratetable";
/**
 * This type is the base response of the <b>getRateTables</b> method.
 */
export declare class RateTableResponse extends SpeakeasyBase {
    /**
     * An array of all shipping rate tables defined for a marketplace (or all marketplaces if no <b>country_code</b> query parameter is used). This array will be returned as empty if the seller has no defined shipping rate tables for the specified marketplace.
     */
    rateTables?: RateTable[];
}
