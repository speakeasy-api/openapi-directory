import { SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfig } from "./loggingconfig";
import { RegistryTypeEnum } from "./registrytypeenum";
export declare class RegisterTypeInput extends SpeakeasyBase {
    clientRequestToken?: string;
    executionRoleArn?: string;
    loggingConfig?: LoggingConfig;
    schemaHandlerPackage: string;
    type?: RegistryTypeEnum;
    typeName: string;
}
