import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type contains the name and value of an input parameter that contributed to a specific error or warning condition.
 */
export declare class ErrorParameter extends SpeakeasyBase {
    /**
     * This is the name of input field that caused an issue with the call request.
     */
    name?: string;
    /**
     * This is the actual value that was passed in for the element specified in the <strong>name</strong> field.
     */
    value?: string;
}
