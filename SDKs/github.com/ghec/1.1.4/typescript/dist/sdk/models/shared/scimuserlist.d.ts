import { SpeakeasyBase } from "../../../internal/utils";
import { ScimUser } from "./scimuser";
/**
 * SCIM User List
 */
export declare class ScimUserList extends SpeakeasyBase {
    resources: ScimUser[];
    itemsPerPage: number;
    /**
     * SCIM schema used.
     */
    schemas: string[];
    startIndex: number;
    totalResults: number;
}
