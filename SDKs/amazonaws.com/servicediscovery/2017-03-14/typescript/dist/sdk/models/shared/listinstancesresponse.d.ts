import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceSummary } from "./instancesummary";
/**
 * Success
 */
export declare class ListInstancesResponse extends SpeakeasyBase {
    instances?: InstanceSummary[];
    nextToken?: string;
}
