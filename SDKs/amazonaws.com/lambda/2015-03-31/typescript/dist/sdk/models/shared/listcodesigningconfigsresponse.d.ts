import { SpeakeasyBase } from "../../../internal/utils";
import { CodeSigningConfig } from "./codesigningconfig";
/**
 * Success
 */
export declare class ListCodeSigningConfigsResponse extends SpeakeasyBase {
    codeSigningConfigs?: CodeSigningConfig[];
    nextMarker?: string;
}
