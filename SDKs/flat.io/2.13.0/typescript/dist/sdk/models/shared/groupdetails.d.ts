import { SpeakeasyBase } from "../../../internal/utils";
import { GroupTypeEnum } from "./grouptypeenum";
/**
 * The details of a group
 */
export declare class GroupDetails extends SpeakeasyBase {
    /**
     * The date when the group was create
     */
    creationDate?: Date;
    /**
     * The unique identifier of the group
     */
    id?: string;
    /**
     * The displayable name of the group
     */
    name?: string;
    /**
     * The unique identifier of the Organization owning the group
     */
    organization?: string;
    /**
     * `true` if the properties and members of this group are in in read-only
     *
     * @remarks
     *
     */
    readOnly?: boolean;
    /**
     * The type of the group
     */
    type?: GroupTypeEnum;
    /**
     * The number of students in this group
     */
    usersCount?: number;
}
