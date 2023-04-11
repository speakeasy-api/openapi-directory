import { SpeakeasyBase } from "../../../internal/utils";
import { GroupTypeEnum } from "./grouptypeenum";
/**
 * A group of users
 */
export declare class Group extends SpeakeasyBase {
    /**
     * The creation date of the group
     */
    creationDate?: Date;
    /**
     * The unique identifier of the group
     */
    id?: string;
    /**
     * The display name of the group
     */
    name?: string;
    /**
     * If the group is related to an organization, this field will contain
     *
     * @remarks
     * the unique identifier of the organization
     *
     */
    organization?: string;
    /**
     * `True` if the group is set in read-only
     *
     * @remarks
     *
     */
    readOnly?: boolean;
    /**
     * The type of the group:
     *
     * @remarks
     * * `generic`: A group created by a Flat user
     * * `classTeachers`: A group created automaticaly by Flat that contains
     *   the teachers of a class
     * * `classStudents`: A group created automaticaly by Flat that contains
     *   the studnets of a class
     *
     */
    type?: GroupTypeEnum;
    /**
     * The number of users in this group
     */
    usersCount?: number;
}
