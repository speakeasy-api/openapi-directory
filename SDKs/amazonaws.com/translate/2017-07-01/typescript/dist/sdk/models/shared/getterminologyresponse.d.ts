import { SpeakeasyBase } from "../../../internal/utils";
import { TerminologyDataLocation } from "./terminologydatalocation";
import { TerminologyProperties } from "./terminologyproperties";
/**
 * Success
 */
export declare class GetTerminologyResponse extends SpeakeasyBase {
    auxiliaryDataLocation?: TerminologyDataLocation;
    terminologyDataLocation?: TerminologyDataLocation;
    terminologyProperties?: TerminologyProperties;
}
