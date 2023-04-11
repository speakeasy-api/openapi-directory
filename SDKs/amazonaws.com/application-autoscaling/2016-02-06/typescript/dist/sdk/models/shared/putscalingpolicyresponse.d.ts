import { SpeakeasyBase } from "../../../internal/utils";
import { Alarm } from "./alarm";
/**
 * Success
 */
export declare class PutScalingPolicyResponse extends SpeakeasyBase {
    alarms?: Alarm[];
    policyARN: string;
}
