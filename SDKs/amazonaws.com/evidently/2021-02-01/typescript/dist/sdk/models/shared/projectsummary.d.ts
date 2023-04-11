import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectStatusEnum } from "./projectstatusenum";
/**
 * A structure that contains configuration information about an Evidently project.
 */
export declare class ProjectSummary extends SpeakeasyBase {
    activeExperimentCount?: number;
    activeLaunchCount?: number;
    arn: string;
    createdTime: Date;
    description?: string;
    experimentCount?: number;
    featureCount?: number;
    lastUpdatedTime: Date;
    launchCount?: number;
    name: string;
    status: ProjectStatusEnum;
    tags?: Record<string, string>;
}
