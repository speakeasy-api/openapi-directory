import { SpeakeasyBase } from "../../../internal/utils";
import { ActionSource } from "./actionsource";
import { ActionStatusEnum } from "./actionstatusenum";
import { MetadataProperties } from "./metadataproperties";
import { UserContext } from "./usercontext";
/**
 * Success
 */
export declare class DescribeActionResponse extends SpeakeasyBase {
    actionArn?: string;
    actionName?: string;
    actionType?: string;
    /**
     * Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
     */
    createdBy?: UserContext;
    creationTime?: Date;
    description?: string;
    /**
     * Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
     */
    lastModifiedBy?: UserContext;
    lastModifiedTime?: Date;
    lineageGroupArn?: string;
    /**
     * Metadata properties of the tracking entity, trial, or trial component.
     */
    metadataProperties?: MetadataProperties;
    properties?: Record<string, string>;
    source?: ActionSource;
    status?: ActionStatusEnum;
}
