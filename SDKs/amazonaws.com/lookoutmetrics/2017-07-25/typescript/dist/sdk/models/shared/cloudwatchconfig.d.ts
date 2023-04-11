import { SpeakeasyBase } from "../../../internal/utils";
import { BackTestConfiguration } from "./backtestconfiguration";
/**
 * Details about an Amazon CloudWatch datasource.
 */
export declare class CloudWatchConfig extends SpeakeasyBase {
    backTestConfiguration?: BackTestConfiguration;
    roleArn?: string;
}
