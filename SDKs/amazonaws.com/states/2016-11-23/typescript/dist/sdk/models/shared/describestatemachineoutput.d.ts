import { SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfiguration } from "./loggingconfiguration";
import { StateMachineStatusEnum } from "./statemachinestatusenum";
import { StateMachineTypeEnum } from "./statemachinetypeenum";
import { TracingConfiguration } from "./tracingconfiguration";
/**
 * Success
 */
export declare class DescribeStateMachineOutput extends SpeakeasyBase {
    creationDate: Date;
    definition: string;
    label?: string;
    /**
     * The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs options.
     */
    loggingConfiguration?: LoggingConfiguration;
    name: string;
    roleArn: string;
    stateMachineArn: string;
    status?: StateMachineStatusEnum;
    tracingConfiguration?: TracingConfiguration;
    type: StateMachineTypeEnum;
}
