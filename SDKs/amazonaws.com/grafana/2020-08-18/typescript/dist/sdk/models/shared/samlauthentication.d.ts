import { SpeakeasyBase } from "../../../internal/utils";
import { SamlConfiguration } from "./samlconfiguration";
import { SamlConfigurationStatusEnum } from "./samlconfigurationstatusenum";
/**
 * A structure containing information about how this workspace works with SAML.
 */
export declare class SamlAuthentication extends SpeakeasyBase {
    configuration?: SamlConfiguration;
    status: SamlConfigurationStatusEnum;
}
