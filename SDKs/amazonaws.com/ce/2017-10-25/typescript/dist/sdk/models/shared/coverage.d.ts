import { SpeakeasyBase } from "../../../internal/utils";
import { CoverageCost } from "./coveragecost";
import { CoverageHours } from "./coveragehours";
import { CoverageNormalizedUnits } from "./coveragenormalizedunits";
/**
 * The amount of instance usage that a reservation covered.
 */
export declare class Coverage extends SpeakeasyBase {
    coverageCost?: CoverageCost;
    coverageHours?: CoverageHours;
    coverageNormalizedUnits?: CoverageNormalizedUnits;
}
