import { SpeakeasyBase } from "../../../internal/utils";
import { FunctionEventInvokeConfig } from "./functioneventinvokeconfig";
/**
 * Success
 */
export declare class ListFunctionEventInvokeConfigsResponse extends SpeakeasyBase {
    functionEventInvokeConfigs?: FunctionEventInvokeConfig[];
    nextMarker?: string;
}
