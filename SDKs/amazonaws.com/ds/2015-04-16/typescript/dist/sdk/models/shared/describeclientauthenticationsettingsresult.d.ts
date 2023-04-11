import { SpeakeasyBase } from "../../../internal/utils";
import { ClientAuthenticationSettingInfo } from "./clientauthenticationsettinginfo";
/**
 * Success
 */
export declare class DescribeClientAuthenticationSettingsResult extends SpeakeasyBase {
    clientAuthenticationSettingsInfo?: ClientAuthenticationSettingInfo[];
    nextToken?: string;
}
