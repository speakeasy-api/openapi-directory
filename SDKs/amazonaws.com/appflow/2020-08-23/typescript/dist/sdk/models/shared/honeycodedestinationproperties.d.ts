import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorHandlingConfig } from "./errorhandlingconfig";
/**
 *  The properties that are applied when Amazon Honeycode is used as a destination.
 */
export declare class HoneycodeDestinationProperties extends SpeakeasyBase {
    /**
     *  The settings that determine how Amazon AppFlow handles an error when placing data in the destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details.
     */
    errorHandlingConfig?: ErrorHandlingConfig;
    object: string;
}
