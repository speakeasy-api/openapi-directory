import { SpeakeasyBase } from "../../../internal/utils";
import { AppValidationConfiguration } from "./appvalidationconfiguration";
import { ServerGroupValidationConfiguration } from "./servergroupvalidationconfiguration";
/**
 * Success
 */
export declare class GetAppValidationConfigurationResponse extends SpeakeasyBase {
    appValidationConfigurations?: AppValidationConfiguration[];
    serverGroupValidationConfigurations?: ServerGroupValidationConfiguration[];
}
