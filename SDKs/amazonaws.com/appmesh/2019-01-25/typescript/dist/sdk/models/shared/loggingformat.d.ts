import { SpeakeasyBase } from "../../../internal/utils";
import { JsonFormatRef } from "./jsonformatref";
/**
 * An object that represents the format for the logs.
 */
export declare class LoggingFormat extends SpeakeasyBase {
    json?: JsonFormatRef[];
    text?: string;
}
