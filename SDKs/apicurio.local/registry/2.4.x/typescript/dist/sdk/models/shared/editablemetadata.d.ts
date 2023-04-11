import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Updated artifact metadata.
 */
export declare class EditableMetaData extends SpeakeasyBase {
    description?: string;
    labels?: string[];
    name?: string;
    /**
     * User-defined name-value pairs. Name and value must be strings.
     */
    properties?: Record<string, string>;
}
