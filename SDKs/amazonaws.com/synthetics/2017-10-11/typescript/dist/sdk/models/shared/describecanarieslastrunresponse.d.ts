import { SpeakeasyBase } from "../../../internal/utils";
import { CanaryLastRun } from "./canarylastrun";
/**
 * Success
 */
export declare class DescribeCanariesLastRunResponse extends SpeakeasyBase {
    canariesLastRun?: CanaryLastRun[];
    nextToken?: string;
}
