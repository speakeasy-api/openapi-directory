import { SpeakeasyBase } from "../../../internal/utils";
import { TerminologyDataLocation } from "./terminologydatalocation";
import { TerminologyProperties } from "./terminologyproperties";
/**
 * Success
 */
export declare class ImportTerminologyResponse extends SpeakeasyBase {
    auxiliaryDataLocation?: TerminologyDataLocation;
    terminologyProperties?: TerminologyProperties;
}
