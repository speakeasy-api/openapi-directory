import { SpeakeasyBase } from "../../../internal/utils";
import { FairsharePolicy } from "./fairsharepolicy";
/**
 * An object that represents a scheduling policy.
 */
export declare class SchedulingPolicyDetail extends SpeakeasyBase {
    arn: string;
    fairsharePolicy?: FairsharePolicy;
    name: string;
    tags?: Record<string, string>;
}
