import { SpeakeasyBase } from "../../../internal/utils";
import { SystemInstanceSummary } from "./systeminstancesummary";
/**
 * Success
 */
export declare class DeploySystemInstanceResponse extends SpeakeasyBase {
    greengrassDeploymentId?: string;
    summary: SystemInstanceSummary;
}
