import { SpeakeasyBase } from "../../../internal/utils";
import { Phone } from "./phone";
/**
 * Phones List
 */
export declare class PhoneList extends SpeakeasyBase {
    /**
     * List of phones.
     */
    phones: Phone[];
    /**
     * Total sum of items in the list.
     */
    sum: number;
}
