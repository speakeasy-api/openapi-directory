import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A complex type that defines an error and error message.
 */
export declare class ErrorParameter extends SpeakeasyBase {
    /**
     * Name of the entity that threw the error.
     */
    name?: string;
    /**
     * A description of the error.
     */
    value?: string;
}
