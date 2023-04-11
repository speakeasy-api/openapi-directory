import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Can be one of the following 10(Low), 20(Medium), 30(High), 40(Urgent)
 */
export declare enum TaskTemplateDefaultPriorityEnum {
    Ten = "10",
    Twenty = "20",
    Thirty = "30",
    Forty = "40"
}
/**
 * Created
 */
export declare class TaskTemplate extends SpeakeasyBase {
    archived?: boolean;
    createdAt?: string;
    defaultAssigneeGroup?: number;
    defaultAssigneeUser?: string;
    defaultCategory?: number;
    /**
     * Offset due date, format should follow `"[DD] [HH:[MM:]]ss[.uuuuuu]"`
     */
    defaultDueDateOffset?: string;
    defaultNote?: string;
    /**
     * Can be one of the following 10(Low), 20(Medium), 30(High), 40(Urgent)
     */
    defaultPriority?: TaskTemplateDefaultPriorityEnum;
    defaultStatus?: number;
    defaultTitle?: string;
    id?: number;
    name: string;
    practiceGroup?: string;
    updatedAt?: string;
}
