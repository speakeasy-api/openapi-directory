import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentSummary } from "./deploymentsummary";
/**
 * Success
 */
export declare class ListDeploymentsResponse extends SpeakeasyBase {
    deployments: DeploymentSummary[];
    nextToken?: string;
}
