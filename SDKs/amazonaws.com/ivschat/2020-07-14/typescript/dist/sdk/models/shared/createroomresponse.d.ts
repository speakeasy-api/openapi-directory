import { SpeakeasyBase } from "../../../internal/utils";
import { MessageReviewHandler } from "./messagereviewhandler";
/**
 * Success
 */
export declare class CreateRoomResponse extends SpeakeasyBase {
    arn?: string;
    createTime?: Date;
    id?: string;
    loggingConfigurationIdentifiers?: string[];
    maximumMessageLength?: number;
    maximumMessageRatePerSecond?: number;
    messageReviewHandler?: MessageReviewHandler;
    name?: string;
    tags?: Record<string, string>;
    updateTime?: Date;
}
