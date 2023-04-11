import { SpeakeasyBase } from "../../../internal/utils";
import { LDAPSSettingInfo } from "./ldapssettinginfo";
/**
 * Success
 */
export declare class DescribeLDAPSSettingsResult extends SpeakeasyBase {
    ldapsSettingsInfo?: LDAPSSettingInfo[];
    nextToken?: string;
}
