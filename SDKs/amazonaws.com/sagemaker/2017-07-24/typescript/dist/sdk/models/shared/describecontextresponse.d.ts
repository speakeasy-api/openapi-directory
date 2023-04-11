import { SpeakeasyBase } from "../../../internal/utils";
import { ContextSource } from "./contextsource";
import { UserContext } from "./usercontext";
/**
 * Success
 */
export declare class DescribeContextResponse extends SpeakeasyBase {
    contextArn?: string;
    contextName?: string;
    contextType?: string;
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
    properties?: Record<string, string>;
    source?: ContextSource;
}
