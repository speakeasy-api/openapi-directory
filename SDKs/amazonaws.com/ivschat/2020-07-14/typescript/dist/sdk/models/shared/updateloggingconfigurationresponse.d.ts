import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationConfiguration } from "./destinationconfiguration";
import { UpdateLoggingConfigurationStateEnum } from "./updateloggingconfigurationstateenum";
/**
 * Success
 */
export declare class UpdateLoggingConfigurationResponse extends SpeakeasyBase {
    arn?: string;
    createTime?: Date;
    destinationConfiguration?: DestinationConfiguration;
    id?: string;
    name?: string;
    state?: UpdateLoggingConfigurationStateEnum;
    tags?: Record<string, string>;
    updateTime?: Date;
}
