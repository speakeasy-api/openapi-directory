import { SpeakeasyBase } from "../../../internal/utils";
import { BotStatusEnum } from "./botstatusenum";
import { DataPrivacy } from "./dataprivacy";
export declare class CreateBotResponse extends SpeakeasyBase {
    botId?: string;
    botName?: string;
    botStatus?: BotStatusEnum;
    botTags?: Record<string, string>;
    creationDateTime?: Date;
    dataPrivacy?: DataPrivacy;
    description?: string;
    idleSessionTTLInSeconds?: number;
    roleArn?: string;
    testBotAliasTags?: Record<string, string>;
}
