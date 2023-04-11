import { SpeakeasyBase } from "../../../internal/utils";
import { TextLogDestination } from "./textlogdestination";
/**
 * Defines settings to enable text conversation logs.
 */
export declare class TextLogSetting extends SpeakeasyBase {
    /**
     * Defines the Amazon CloudWatch Logs destination log group for conversation text logs.
     */
    destination: TextLogDestination;
    enabled: boolean;
}
