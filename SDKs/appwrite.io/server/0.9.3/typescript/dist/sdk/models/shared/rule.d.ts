import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Rule
 */
export declare class Rule extends SpeakeasyBase {
    /**
     * Rule Collection.
     */
    dollarCollection: string;
    /**
     * Rule ID.
     */
    dollarId: string;
    /**
     * Is array?
     */
    array: boolean;
    /**
     * Rule default value.
     */
    default: string;
    /**
     * Rule key.
     */
    key: string;
    /**
     * Rule label.
     */
    label: string;
    /**
     * List of allowed values
     */
    list: string[];
    /**
     * Is required?
     */
    required: boolean;
    /**
     * Rule type. Possible values:
     */
    type: string;
}
