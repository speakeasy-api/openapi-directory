import { SpeakeasyBase } from "../../../internal/utils";
import { TargetSummary } from "./targetsummary";
/**
 * Success
 */
export declare class ListTargetsResult extends SpeakeasyBase {
    nextToken?: string;
    targets?: TargetSummary[];
}
