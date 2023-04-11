import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionRoleIdentityConfigEnum } from "./executionroleidentityconfigenum";
import { RStudioServerProDomainSettings } from "./rstudioserverprodomainsettings";
/**
 * A collection of settings that apply to the <code>SageMaker Domain</code>. These settings are specified through the <code>CreateDomain</code> API call.
 */
export declare class DomainSettings extends SpeakeasyBase {
    executionRoleIdentityConfig?: ExecutionRoleIdentityConfigEnum;
    rStudioServerProDomainSettings?: RStudioServerProDomainSettings;
    securityGroupIds?: string[];
}
