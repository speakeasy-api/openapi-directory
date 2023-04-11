import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityConfiguration } from "./securityconfiguration";
/**
 * Success
 */
export declare class GetSecurityConfigurationsResponse extends SpeakeasyBase {
    nextToken?: string;
    securityConfigurations?: SecurityConfiguration[];
}
