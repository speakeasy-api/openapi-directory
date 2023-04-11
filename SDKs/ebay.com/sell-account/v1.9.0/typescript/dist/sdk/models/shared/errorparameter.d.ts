import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A complex type that indicates a parameter that caused an error and the value of the parameter which caused the error.
 */
export declare class ErrorParameter extends SpeakeasyBase {
    /**
     * Name of the parameter that caused the error.
     */
    name?: string;
    /**
     * The value of the parameter that caused the error.
     */
    value?: string;
}
