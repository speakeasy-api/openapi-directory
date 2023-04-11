import { SpeakeasyBase } from "../../../internal/utils";
import { Setting } from "./setting";
/**
 * Success
 */
export declare class ListAccountSettingsResponse extends SpeakeasyBase {
    nextToken?: string;
    settings?: Setting[];
}
