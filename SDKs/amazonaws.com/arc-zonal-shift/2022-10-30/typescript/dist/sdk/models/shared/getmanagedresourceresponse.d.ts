import { SpeakeasyBase } from "../../../internal/utils";
import { ZonalShiftInResource } from "./zonalshiftinresource";
/**
 * Success
 */
export declare class GetManagedResourceResponse extends SpeakeasyBase {
    appliedWeights: Record<string, number>;
    arn?: string;
    name?: string;
    zonalShifts: ZonalShiftInResource[];
}
