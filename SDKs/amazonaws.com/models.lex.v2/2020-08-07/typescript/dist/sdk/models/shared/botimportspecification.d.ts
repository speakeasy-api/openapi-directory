import { SpeakeasyBase } from "../../../internal/utils";
import { DataPrivacy } from "./dataprivacy";
/**
 * Provides the bot parameters required for importing a bot.
 */
export declare class BotImportSpecification extends SpeakeasyBase {
    botName: string;
    botTags?: Record<string, string>;
    /**
     * By default, data stored by Amazon Lex is encrypted. The <code>DataPrivacy</code> structure provides settings that determine how Amazon Lex handles special cases of securing the data for your bot.
     */
    dataPrivacy: DataPrivacy;
    idleSessionTTLInSeconds?: number;
    roleArn: string;
    testBotAliasTags?: Record<string, string>;
}
