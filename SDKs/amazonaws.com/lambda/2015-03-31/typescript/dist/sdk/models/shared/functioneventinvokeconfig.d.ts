import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationConfig } from "./destinationconfig";
/**
 * Success
 */
export declare class FunctionEventInvokeConfig extends SpeakeasyBase {
    destinationConfig?: DestinationConfig;
    functionArn?: string;
    lastModified?: Date;
    maximumEventAgeInSeconds?: number;
    maximumRetryAttempts?: number;
}
