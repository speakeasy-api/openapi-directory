import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for a error parameter.
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
