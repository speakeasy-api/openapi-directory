import { SpeakeasyBase } from "../../../internal/utils";
import { Deployment } from "./deployment";
/**
 * Success
 */
export declare class ListDeploymentsResponse extends SpeakeasyBase {
    deployments?: Deployment[];
    nextToken?: string;
}
