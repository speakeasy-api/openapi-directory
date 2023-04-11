import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Models a single group from the result set returned when searching for groups.
 */
export declare class SearchedGroup extends SpeakeasyBase {
    createdBy: string;
    createdOn: Date;
    description: string;
    /**
     * An ID of a single artifact group.
     */
    id: string;
    modifiedBy: string;
    modifiedOn: Date;
}
