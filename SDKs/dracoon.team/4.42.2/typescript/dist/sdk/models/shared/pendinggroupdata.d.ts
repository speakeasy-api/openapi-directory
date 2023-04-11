import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Pending group information
 */
export declare class PendingGroupData extends SpeakeasyBase {
    /**
     * Unique identifier for the group
     *
     * @remarks
     *
     * use `id` from `GroupInfo` instead
     */
    id: number;
    /**
     * Group name
     *
     * @remarks
     *
     * use `name` from `GroupInfo` instead
     */
    name: string;
}
