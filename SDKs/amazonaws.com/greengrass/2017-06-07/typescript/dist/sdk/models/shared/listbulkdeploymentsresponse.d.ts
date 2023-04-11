import { SpeakeasyBase } from "../../../internal/utils";
import { BulkDeployment } from "./bulkdeployment";
/**
 * Success
 */
export declare class ListBulkDeploymentsResponse extends SpeakeasyBase {
    bulkDeployments?: BulkDeployment[];
    nextToken?: string;
}
