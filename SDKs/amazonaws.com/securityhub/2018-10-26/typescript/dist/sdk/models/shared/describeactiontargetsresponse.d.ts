import { SpeakeasyBase } from "../../../internal/utils";
import { ActionTarget } from "./actiontarget";
/**
 * Success
 */
export declare class DescribeActionTargetsResponse extends SpeakeasyBase {
    actionTargets: ActionTarget[];
    nextToken?: string;
}
