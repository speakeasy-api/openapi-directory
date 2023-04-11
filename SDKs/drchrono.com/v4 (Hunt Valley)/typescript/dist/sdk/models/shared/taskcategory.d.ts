import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class TaskCategory extends SpeakeasyBase {
    archived?: boolean;
    createdAt?: string;
    id?: number;
    /**
     * Indicates that the category is a system wide (pre-defined) category
     */
    isGlobal?: string;
    name: string;
    practiceGroup: number;
    updatedAt?: string;
}
