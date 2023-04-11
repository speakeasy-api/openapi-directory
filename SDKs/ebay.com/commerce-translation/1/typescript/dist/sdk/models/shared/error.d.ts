import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorParameter } from "./errorparameter";
/**
 * This type defines the fields that can be returned in an error.
 */
export declare class ErrorT extends SpeakeasyBase {
    /**
     * Identifies the type of erro.
     */
    category?: string;
    /**
     * Name for the primary system where the error occurred. This is relevant for application errors.
     */
    domain?: string;
    /**
     * A unique number to identify the error.
     */
    errorId?: number;
    /**
     * An array of request elements most closely associated to the error.
     */
    inputRefIds?: string[];
    /**
     * A more detailed explanation of the error.
     */
    longMessage?: string;
    /**
     * Information on how to correct the problem, in the end user's terms and language where applicable.
     */
    message?: string;
    /**
     * An array of request elements most closely associated to the error.
     */
    outputRefIds?: string[];
    /**
     * An array of name/value pairs that describe details the error condition. These are useful when multiple errors are returned.
     */
    parameters?: ErrorParameter[];
    /**
     * Further helps indicate which subsystem the error is coming from. System subcategories include: Initialization, Serialization, Security, Monitoring, Rate Limiting, etc.
     */
    subdomain?: string;
}
