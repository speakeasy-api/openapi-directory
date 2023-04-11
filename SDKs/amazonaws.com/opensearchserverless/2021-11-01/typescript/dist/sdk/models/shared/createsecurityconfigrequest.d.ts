import { SpeakeasyBase } from "../../../internal/utils";
import { SamlConfigOptions } from "./samlconfigoptions";
import { SecurityConfigTypeEnum } from "./securityconfigtypeenum";
export declare class CreateSecurityConfigRequest extends SpeakeasyBase {
    clientToken?: string;
    description?: string;
    name: string;
    samlOptions?: SamlConfigOptions;
    type: SecurityConfigTypeEnum;
}
