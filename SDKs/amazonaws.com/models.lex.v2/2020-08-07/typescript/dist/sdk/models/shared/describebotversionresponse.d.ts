import { SpeakeasyBase } from "../../../internal/utils";
import { BotMember } from "./botmember";
import { BotStatusEnum } from "./botstatusenum";
import { BotTypeEnum } from "./bottypeenum";
import { DataPrivacy } from "./dataprivacy";
import { ParentBotNetwork } from "./parentbotnetwork";
/**
 * Success
 */
export declare class DescribeBotVersionResponse extends SpeakeasyBase {
    botId?: string;
    botMembers?: BotMember[];
    botName?: string;
    botStatus?: BotStatusEnum;
    botType?: BotTypeEnum;
    botVersion?: string;
    creationDateTime?: Date;
    dataPrivacy?: DataPrivacy;
    description?: string;
    failureReasons?: string[];
    idleSessionTTLInSeconds?: number;
    parentBotNetworks?: ParentBotNetwork[];
    roleArn?: string;
}
