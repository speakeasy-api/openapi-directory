import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Can be one of the following `O`(open), `P`(In progress), `H`(On hold), `C`(Complete), default to `O`(Open)
 */
export declare enum TaskStatusStatusCategoryEnum {
    O = "O",
    P = "P",
    H = "H",
    C = "C"
}
/**
 * Created
 */
export declare class TaskStatus extends SpeakeasyBase {
    archived?: boolean;
    createdAt?: string;
    id?: number;
    name: string;
    practiceGroup: number;
    /**
     * Can be one of the following `O`(open), `P`(In progress), `H`(On hold), `C`(Complete), default to `O`(Open)
     */
    statusCategory?: TaskStatusStatusCategoryEnum;
    /**
     * ID of `/api/task_categories`
     */
    taskCategory?: number;
    updatedAt?: string;
}
