import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An array of name/value pairs that provide details regarding the error.
 */
export declare class ErrorParameter extends SpeakeasyBase {
    /**
     * This is the name of input field that caused an issue with the call request.
     */
    name?: string;
    /**
     * This is the actual value that was passed in for the element specified in the <b> name</b>  field.
     */
    value?: string;
}
