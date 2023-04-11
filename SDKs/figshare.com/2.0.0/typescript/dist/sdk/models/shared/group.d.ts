import { SpeakeasyBase } from "../../../internal/utils";
export declare class Group extends SpeakeasyBase {
    /**
     * HR code associated with group, if code exists
     */
    associationCriteria: string;
    /**
     * Group id
     */
    id: number;
    /**
     * Group name
     */
    name: string;
    /**
     * Parent group if any
     */
    parentId: number;
    /**
     * Group resource id
     */
    resourceId: string;
}
