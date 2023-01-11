import { SpeakeasyBase } from "../../../internal/utils";
import { DataPrivacy } from "./dataprivacy";
/**
 * Provides the bot parameters required for importing a bot.
**/
export declare class BotImportSpecification extends SpeakeasyBase {
    botName: string;
    botTags?: Record<string, string>;
    dataPrivacy: DataPrivacy;
    idleSessionTTLInSeconds?: number;
    roleArn: string;
    testBotAliasTags?: Record<string, string>;
}
