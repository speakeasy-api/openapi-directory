import { SpeakeasyBase } from "../../../internal/utils";
import { AppValidationStrategyEnum } from "./appvalidationstrategyenum";
import { SSMValidationParameters } from "./ssmvalidationparameters";
/**
 * Configuration for validating an application.
 */
export declare class AppValidationConfiguration extends SpeakeasyBase {
    appValidationStrategy?: AppValidationStrategyEnum;
    name?: string;
    ssmValidationParameters?: SSMValidationParameters;
    validationId?: string;
}
