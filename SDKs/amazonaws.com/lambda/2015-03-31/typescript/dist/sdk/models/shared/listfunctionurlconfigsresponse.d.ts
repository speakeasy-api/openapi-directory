import { SpeakeasyBase } from "../../../internal/utils";
import { FunctionUrlConfig } from "./functionurlconfig";
/**
 * Success
 */
export declare class ListFunctionUrlConfigsResponse extends SpeakeasyBase {
    functionUrlConfigs: FunctionUrlConfig[];
    nextMarker?: string;
}
