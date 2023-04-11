import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectStateEnum } from "./projectstateenum";
import { Resource } from "./resource";
/**
 *  Detailed information about an AWS Mobile Hub project.
 */
export declare class ProjectDetails extends SpeakeasyBase {
    consoleUrl?: string;
    createdDate?: Date;
    lastUpdatedDate?: Date;
    /**
     *  Name of the project.
     */
    name?: string;
    /**
     *  Unique project identifier.
     */
    projectId?: string;
    /**
     *  Default region to use for AWS resource creation in the AWS Mobile Hub project.
     */
    region?: string;
    /**
     *  List of AWS resources associated with a project.
     */
    resources?: Resource[];
    /**
     *  Synchronization state for a project.
     */
    state?: ProjectStateEnum;
}
