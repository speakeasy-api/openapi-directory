import { SpeakeasyBase } from "../../../internal/utils";
import { LakeConfigurationResponse } from "./lakeconfigurationresponse";
/**
 * Success
 */
export declare class GetDatalakeResponse extends SpeakeasyBase {
    configurations: Record<string, LakeConfigurationResponse>;
}
