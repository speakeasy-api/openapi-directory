import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TaskStatusStatusCategoryEnum {
    O = "O",
    P = "P",
    H = "H",
    C = "C"
}
export declare class TaskStatus extends SpeakeasyBase {
    archived?: boolean;
    createdAt?: string;
    id?: number;
    name: string;
    practiceGroup: number;
    statusCategory?: TaskStatusStatusCategoryEnum;
    taskCategory?: number;
    updatedAt?: string;
}
