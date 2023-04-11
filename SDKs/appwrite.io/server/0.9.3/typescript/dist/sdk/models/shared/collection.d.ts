import { SpeakeasyBase } from "../../../internal/utils";
import { Rule } from "./rule";
/**
 * Collection
 */
export declare class Collection extends SpeakeasyBase {
    /**
     * Collection ID.
     */
    dollarId: string;
    /**
     * Collection permissions.
     */
    dollarPermissions: Record<string, any>;
    /**
     * Collection creation date in Unix timestamp.
     */
    dateCreated: number;
    /**
     * Collection creation date in Unix timestamp.
     */
    dateUpdated: number;
    /**
     * Collection name.
     */
    name: string;
    /**
     * Collection rules.
     */
    rules: Rule[];
}
