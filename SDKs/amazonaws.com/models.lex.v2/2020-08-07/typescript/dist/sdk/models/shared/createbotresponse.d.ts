import { SpeakeasyBase } from "../../../internal/utils";
import { BotMember } from "./botmember";
import { BotStatusEnum } from "./botstatusenum";
import { BotTypeEnum } from "./bottypeenum";
import { DataPrivacy } from "./dataprivacy";
/**
 * Success
 */
export declare class CreateBotResponse extends SpeakeasyBase {
    botId?: string;
    botMembers?: BotMember[];
    botName?: string;
    botStatus?: BotStatusEnum;
    botTags?: Record<string, string>;
    botType?: BotTypeEnum;
    creationDateTime?: Date;
    dataPrivacy?: DataPrivacy;
    description?: string;
    idleSessionTTLInSeconds?: number;
    roleArn?: string;
    testBotAliasTags?: Record<string, string>;
}
