import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TaskTemplateDefaultPriorityEnum {
    Ten = "10",
    Twenty = "20",
    Thirty = "30",
    Forty = "40"
}
export declare class TaskTemplate extends SpeakeasyBase {
    archived?: boolean;
    createdAt?: string;
    defaultAssigneeGroup?: number;
    defaultAssigneeUser?: string;
    defaultCategory?: number;
    defaultDueDateOffset?: string;
    defaultNote?: string;
    defaultPriority?: TaskTemplateDefaultPriorityEnum;
    defaultStatus?: number;
    defaultTitle?: string;
    id?: number;
    name: string;
    practiceGroup?: string;
    updatedAt?: string;
}
