import { SpeakeasyBase } from "../../../internal/utils";
import { BasePopular } from "./basepopular";
/**
 * Top 50 popular cars
 */
export declare class PopularCars extends SpeakeasyBase {
    /**
     * Array of all new top 50 cars
     */
    newTop50?: BasePopular[];
    /**
     * Array of all used top 50 cars
     */
    usedTop50?: BasePopular[];
}
