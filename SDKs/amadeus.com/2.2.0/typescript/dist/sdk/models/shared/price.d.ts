import { SpeakeasyBase } from "../../../internal/utils";
import { Fee } from "./fee";
import { Tax } from "./tax";
export declare class Price extends SpeakeasyBase {
    /**
     * Amount without taxes
     */
    base?: string;
    currency?: string;
    /**
     * List of applicable fees
     */
    fees?: Fee[];
    /**
     * The amount of taxes which are refundable
     */
    refundableTaxes?: string;
    taxes?: Tax[];
    /**
     * Total amount paid by the user
     */
    total?: string;
}
