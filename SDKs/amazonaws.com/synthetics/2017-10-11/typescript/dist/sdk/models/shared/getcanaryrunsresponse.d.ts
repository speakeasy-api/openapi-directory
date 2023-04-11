import { SpeakeasyBase } from "../../../internal/utils";
import { CanaryRun } from "./canaryrun";
/**
 * Success
 */
export declare class GetCanaryRunsResponse extends SpeakeasyBase {
    canaryRuns?: CanaryRun[];
    nextToken?: string;
}
