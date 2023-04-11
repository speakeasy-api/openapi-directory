import { SpeakeasyBase } from "../../../internal/utils";
import { TerminologyProperties } from "./terminologyproperties";
/**
 * Success
 */
export declare class ListTerminologiesResponse extends SpeakeasyBase {
    nextToken?: string;
    terminologyPropertiesList?: TerminologyProperties[];
}
