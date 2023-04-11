import { SpeakeasyBase } from "../../../internal/utils";
import { ShareAttributes } from "./shareattributes";
/**
 * The fair share policy for a scheduling policy.
 */
export declare class FairsharePolicy extends SpeakeasyBase {
    computeReservation?: number;
    shareDecaySeconds?: number;
    shareDistribution?: ShareAttributes[];
}
