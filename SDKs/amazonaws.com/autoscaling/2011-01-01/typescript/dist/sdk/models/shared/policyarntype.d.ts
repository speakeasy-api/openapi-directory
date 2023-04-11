import { SpeakeasyBase } from "../../../internal/utils";
import { Alarm } from "./alarm";
/**
 * Contains the output of PutScalingPolicy.
 */
export declare class PolicyARNType extends SpeakeasyBase {
    alarms?: Alarm[];
    policyARN?: string;
}
