import { SpeakeasyBase } from "../../../internal/utils";
import { BotStatusEnum } from "./botstatusenum";
/**
 * Success
 */
export declare class DeleteBotResponse extends SpeakeasyBase {
    botId?: string;
    botStatus?: BotStatusEnum;
}
