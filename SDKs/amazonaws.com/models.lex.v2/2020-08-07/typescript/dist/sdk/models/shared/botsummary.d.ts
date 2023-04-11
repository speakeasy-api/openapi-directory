import { SpeakeasyBase } from "../../../internal/utils";
import { BotStatusEnum } from "./botstatusenum";
import { BotTypeEnum } from "./bottypeenum";
/**
 * Summary information about a bot returned by the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBots.html">ListBots</a> operation.
 */
export declare class BotSummary extends SpeakeasyBase {
    botId?: string;
    botName?: string;
    botStatus?: BotStatusEnum;
    botType?: BotTypeEnum;
    description?: string;
    lastUpdatedDateTime?: Date;
    latestBotVersion?: string;
}
