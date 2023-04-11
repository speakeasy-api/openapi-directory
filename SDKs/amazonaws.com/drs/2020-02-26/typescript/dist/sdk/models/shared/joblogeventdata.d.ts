import { SpeakeasyBase } from "../../../internal/utils";
import { ConversionProperties } from "./conversionproperties";
/**
 * Metadata associated with a Job log.
 */
export declare class JobLogEventData extends SpeakeasyBase {
    conversionProperties?: ConversionProperties;
    conversionServerID?: string;
    rawError?: string;
    sourceServerID?: string;
    targetInstanceID?: string;
}
