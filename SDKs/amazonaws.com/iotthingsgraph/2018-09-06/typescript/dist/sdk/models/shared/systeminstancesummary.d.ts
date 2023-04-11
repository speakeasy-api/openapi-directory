import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentTargetEnum } from "./deploymenttargetenum";
import { SystemInstanceDeploymentStatusEnum } from "./systeminstancedeploymentstatusenum";
/**
 * An object that contains summary information about a system instance.
 */
export declare class SystemInstanceSummary extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    greengrassGroupId?: string;
    greengrassGroupName?: string;
    greengrassGroupVersionId?: string;
    id?: string;
    status?: SystemInstanceDeploymentStatusEnum;
    target?: DeploymentTargetEnum;
    updatedAt?: Date;
}
