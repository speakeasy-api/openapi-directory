import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The group has been successfully created.
 */
export declare class GroupMetaData extends SpeakeasyBase {
    createdBy: string;
    createdOn: Date;
    description: string;
    /**
     * An ID of a single artifact group.
     */
    id: string;
    modifiedBy: string;
    modifiedOn: Date;
    /**
     * User-defined name-value pairs. Name and value must be strings.
     */
    properties: Record<string, string>;
}
