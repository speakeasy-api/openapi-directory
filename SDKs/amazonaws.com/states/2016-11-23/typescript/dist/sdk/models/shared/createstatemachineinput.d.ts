import { SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfiguration } from "./loggingconfiguration";
import { StateMachineTypeEnum } from "./statemachinetypeenum";
import { Tag } from "./tag";
import { TracingConfiguration } from "./tracingconfiguration";
export declare class CreateStateMachineInput extends SpeakeasyBase {
    definition: string;
    loggingConfiguration?: LoggingConfiguration;
    name: string;
    roleArn: string;
    tags?: Tag[];
    tracingConfiguration?: TracingConfiguration;
    type?: StateMachineTypeEnum;
}
