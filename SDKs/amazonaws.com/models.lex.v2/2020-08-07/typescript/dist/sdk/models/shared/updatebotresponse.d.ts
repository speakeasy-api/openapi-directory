import { SpeakeasyBase } from "../../../internal/utils";
import { BotMember } from "./botmember";
import { BotStatusEnum } from "./botstatusenum";
import { BotTypeEnum } from "./bottypeenum";
import { DataPrivacy } from "./dataprivacy";
/**
 * Success
 */
export declare class UpdateBotResponse extends SpeakeasyBase {
    botId?: string;
    botMembers?: BotMember[];
    botName?: string;
    botStatus?: BotStatusEnum;
    botType?: BotTypeEnum;
    creationDateTime?: Date;
    dataPrivacy?: DataPrivacy;
    description?: string;
    idleSessionTTLInSeconds?: number;
    lastUpdatedDateTime?: Date;
    roleArn?: string;
}
