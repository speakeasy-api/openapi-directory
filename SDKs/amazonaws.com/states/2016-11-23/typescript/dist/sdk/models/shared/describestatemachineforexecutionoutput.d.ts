import { SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfiguration } from "./loggingconfiguration";
import { TracingConfiguration } from "./tracingconfiguration";
/**
 * Success
 */
export declare class DescribeStateMachineForExecutionOutput extends SpeakeasyBase {
    definition: string;
    label?: string;
    /**
     * The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs options.
     */
    loggingConfiguration?: LoggingConfiguration;
    mapRunArn?: string;
    name: string;
    roleArn: string;
    stateMachineArn: string;
    tracingConfiguration?: TracingConfiguration;
    updateDate: Date;
}
