import { SpeakeasyBase } from "../../../internal/utils";
import { UserContext } from "./usercontext";
/**
 * Success
 */
export declare class DescribeLineageGroupResponse extends SpeakeasyBase {
    /**
     * Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
     */
    createdBy?: UserContext;
    creationTime?: Date;
    description?: string;
    displayName?: string;
    /**
     * Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
     */
    lastModifiedBy?: UserContext;
    lastModifiedTime?: Date;
    lineageGroupArn?: string;
    lineageGroupName?: string;
}
