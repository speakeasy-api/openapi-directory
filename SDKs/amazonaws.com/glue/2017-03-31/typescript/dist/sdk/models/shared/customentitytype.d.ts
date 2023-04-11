import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object representing a custom pattern for detecting sensitive data across the columns and rows of your structured data.
 */
export declare class CustomEntityType extends SpeakeasyBase {
    contextWords?: string[];
    name: string;
    regexString: string;
}
