import { SpeakeasyBase } from "../../../internal/utils";
import { SamlConfigOptions } from "./samlconfigoptions";
export declare class UpdateSecurityConfigRequest extends SpeakeasyBase {
    clientToken?: string;
    configVersion: string;
    description?: string;
    id: string;
    samlOptions?: SamlConfigOptions;
}
