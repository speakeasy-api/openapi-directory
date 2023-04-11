import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkSettingsSummary } from "./networksettingssummary";
/**
 * Success
 */
export declare class ListNetworkSettingsResponse extends SpeakeasyBase {
    networkSettings?: NetworkSettingsSummary[];
    nextToken?: string;
}
