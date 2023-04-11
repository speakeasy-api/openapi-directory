import { SpeakeasyBase } from "../../../internal/utils";
/**
 * List Behaviors
 */
export declare class BehaviorEntity extends SpeakeasyBase {
    /**
     * URL for attached file
     */
    attachmentUrl?: string;
    /**
     * Behavior type.
     */
    behavior?: string;
    /**
     * Description for this behavior.
     */
    description?: string;
    /**
     * Folder behavior ID
     */
    id?: number;
    /**
     * Name for this behavior.
     */
    name?: string;
    /**
     * Folder path
     */
    path?: string;
    /**
     * Settings for this behavior.  See the section above for an example value to provide here.  Formatting is different for each Behavior type.  May be sent as nested JSON or a single JSON-encoded string.  If using XML encoding for the API call, this data must be sent as a JSON-encoded string.
     */
    value?: Record<string, any>;
}
