import { SpeakeasyBase } from "../../../internal/utils";
import { FunctionConfiguration } from "./functionconfiguration";
/**
 * Success
 */
export declare class ListVersionsByFunctionResponse extends SpeakeasyBase {
    nextMarker?: string;
    versions?: FunctionConfiguration[];
}
