import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectAppConfigResource } from "./projectappconfigresource";
import { ProjectDataDelivery } from "./projectdatadelivery";
import { ProjectStatusEnum } from "./projectstatusenum";
/**
 * This structure defines a project, which is the logical object in Evidently that can contain features, launches, and experiments. Use projects to group similar features together.
 */
export declare class Project extends SpeakeasyBase {
    activeExperimentCount?: number;
    activeLaunchCount?: number;
    appConfigResource?: ProjectAppConfigResource;
    arn: string;
    createdTime: Date;
    dataDelivery?: ProjectDataDelivery;
    description?: string;
    experimentCount?: number;
    featureCount?: number;
    lastUpdatedTime: Date;
    launchCount?: number;
    name: string;
    status: ProjectStatusEnum;
    tags?: Record<string, string>;
}
