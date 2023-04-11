import { SpeakeasyBase } from "../../../internal/utils";
import { ModelPackageGroupStatusEnum } from "./modelpackagegroupstatusenum";
import { UserContext } from "./usercontext";
/**
 * Success
 */
export declare class DescribeModelPackageGroupOutput extends SpeakeasyBase {
    /**
     * Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
     */
    createdBy: UserContext;
    creationTime: Date;
    modelPackageGroupArn: string;
    modelPackageGroupDescription?: string;
    modelPackageGroupName: string;
    modelPackageGroupStatus: ModelPackageGroupStatusEnum;
}
