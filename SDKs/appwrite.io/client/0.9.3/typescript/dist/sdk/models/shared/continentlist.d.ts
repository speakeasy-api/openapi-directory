import { SpeakeasyBase } from "../../../internal/utils";
import { Continent } from "./continent";
/**
 * Continents List
 */
export declare class ContinentList extends SpeakeasyBase {
    /**
     * List of continents.
     */
    continents: Continent[];
    /**
     * Total sum of items in the list.
     */
    sum: number;
}
