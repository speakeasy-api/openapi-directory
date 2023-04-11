import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyTargetSummary } from "./policytargetsummary";
/**
 * Success
 */
export declare class ListTargetsForPolicyResponse extends SpeakeasyBase {
    nextToken?: string;
    targets?: PolicyTargetSummary[];
}
