import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionRoleIdentityConfigEnum } from "./executionroleidentityconfigenum";
import { RStudioServerProDomainSettingsForUpdate } from "./rstudioserverprodomainsettingsforupdate";
/**
 * A collection of <code>Domain</code> configuration settings to update.
 */
export declare class DomainSettingsForUpdate extends SpeakeasyBase {
    executionRoleIdentityConfig?: ExecutionRoleIdentityConfigEnum;
    rStudioServerProDomainSettingsForUpdate?: RStudioServerProDomainSettingsForUpdate;
    securityGroupIds?: string[];
}
