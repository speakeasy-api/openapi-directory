import { SpeakeasyBase } from "../../../internal/utils";
import { EnabledServicePrincipal } from "./enabledserviceprincipal";
/**
 * Success
 */
export declare class ListAWSServiceAccessForOrganizationResponse extends SpeakeasyBase {
    enabledServicePrincipals?: EnabledServicePrincipal[];
    nextToken?: string;
}
