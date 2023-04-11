import { SpeakeasyBase } from "../../../internal/utils";
import { MessageReviewHandler } from "./messagereviewhandler";
/**
 * Summary information about a room.
 */
export declare class RoomSummary extends SpeakeasyBase {
    arn?: string;
    createTime?: Date;
    id?: string;
    loggingConfigurationIdentifiers?: string[];
    messageReviewHandler?: MessageReviewHandler;
    name?: string;
    tags?: Record<string, string>;
    updateTime?: Date;
}
