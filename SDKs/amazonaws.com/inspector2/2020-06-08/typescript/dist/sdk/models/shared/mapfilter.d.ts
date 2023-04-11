import { SpeakeasyBase } from "../../../internal/utils";
import { MapComparisonEnum } from "./mapcomparisonenum";
/**
 * An object that describes details of a map filter.
 */
export declare class MapFilter extends SpeakeasyBase {
    comparison: MapComparisonEnum;
    key: string;
    value?: string;
}
