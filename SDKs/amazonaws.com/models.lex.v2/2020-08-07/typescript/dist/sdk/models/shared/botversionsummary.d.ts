import { SpeakeasyBase } from "../../../internal/utils";
import { BotStatusEnum } from "./botstatusenum";
/**
 * Summary information about a bot version returned by the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBotVersions.html">ListBotVersions</a> operation.
 */
export declare class BotVersionSummary extends SpeakeasyBase {
    botName?: string;
    botStatus?: BotStatusEnum;
    botVersion?: string;
    creationDateTime?: Date;
    description?: string;
}
