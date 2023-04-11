import { SpeakeasyBase } from "../../../internal/utils";
import { CreateLoggingConfigurationStateEnum } from "./createloggingconfigurationstateenum";
import { DestinationConfiguration } from "./destinationconfiguration";
/**
 * Success
 */
export declare class CreateLoggingConfigurationResponse extends SpeakeasyBase {
    arn?: string;
    createTime?: Date;
    destinationConfiguration?: DestinationConfiguration;
    id?: string;
    name?: string;
    state?: CreateLoggingConfigurationStateEnum;
    tags?: Record<string, string>;
    updateTime?: Date;
}
