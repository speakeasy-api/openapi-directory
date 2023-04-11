import { SpeakeasyBase } from "../../../internal/utils";
import { BotStatusEnum } from "./botstatusenum";
/**
 * Success
 */
export declare class DeleteBotVersionResponse extends SpeakeasyBase {
    botId?: string;
    botStatus?: BotStatusEnum;
    botVersion?: string;
}
