import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityConfigSummary } from "./securityconfigsummary";
/**
 * Success
 */
export declare class ListSecurityConfigsResponse extends SpeakeasyBase {
    nextToken?: string;
    securityConfigSummaries?: SecurityConfigSummary[];
}
