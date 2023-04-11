import { SpeakeasyBase } from "../../../internal/utils";
import { BulkDeploymentMetrics } from "./bulkdeploymentmetrics";
import { BulkDeploymentStatusEnum } from "./bulkdeploymentstatusenum";
import { ErrorDetail } from "./errordetail";
/**
 * Success
 */
export declare class GetBulkDeploymentStatusResponse extends SpeakeasyBase {
    bulkDeploymentMetrics?: BulkDeploymentMetrics;
    bulkDeploymentStatus?: BulkDeploymentStatusEnum;
    createdAt?: string;
    errorDetails?: ErrorDetail[];
    errorMessage?: string;
    tags?: Record<string, string>;
}
