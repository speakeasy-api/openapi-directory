import { SpeakeasyBase } from "../../../internal/utils";
import { BulkDeploymentResult } from "./bulkdeploymentresult";
/**
 * Success
 */
export declare class ListBulkDeploymentDetailedReportsResponse extends SpeakeasyBase {
    deployments?: BulkDeploymentResult[];
    nextToken?: string;
}
