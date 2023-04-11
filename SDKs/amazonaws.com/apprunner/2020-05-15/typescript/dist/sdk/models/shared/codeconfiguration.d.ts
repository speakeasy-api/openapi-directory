import { SpeakeasyBase } from "../../../internal/utils";
import { CodeConfigurationValues } from "./codeconfigurationvalues";
import { ConfigurationSourceEnum } from "./configurationsourceenum";
/**
 * Describes the configuration that App Runner uses to build and run an App Runner service from a source code repository.
 */
export declare class CodeConfiguration extends SpeakeasyBase {
    codeConfigurationValues?: CodeConfigurationValues;
    configurationSource: ConfigurationSourceEnum;
}
