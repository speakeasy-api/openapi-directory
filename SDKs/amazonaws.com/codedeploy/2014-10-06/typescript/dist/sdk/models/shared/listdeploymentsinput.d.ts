import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentStatusEnum } from "./deploymentstatusenum";
import { TimeRange } from "./timerange";
/**
 * Represents the input of a <code>ListDeployments</code> operation.
 */
export declare class ListDeploymentsInput extends SpeakeasyBase {
    applicationName?: string;
    createTimeRange?: TimeRange;
    deploymentGroupName?: string;
    externalId?: string;
    includeOnlyStatuses?: DeploymentStatusEnum[];
    nextToken?: string;
}
