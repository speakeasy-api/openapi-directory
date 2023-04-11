import { SpeakeasyBase } from "../../../internal/utils";
import { BotAliasLocaleSettings } from "./botaliaslocalesettings";
import { BotAliasStatusEnum } from "./botaliasstatusenum";
import { ConversationLogSettings } from "./conversationlogsettings";
import { SentimentAnalysisSettings } from "./sentimentanalysissettings";
/**
 * Success
 */
export declare class UpdateBotAliasResponse extends SpeakeasyBase {
    botAliasId?: string;
    botAliasLocaleSettings?: Record<string, BotAliasLocaleSettings>;
    botAliasName?: string;
    botAliasStatus?: BotAliasStatusEnum;
    botId?: string;
    botVersion?: string;
    conversationLogSettings?: ConversationLogSettings;
    creationDateTime?: Date;
    description?: string;
    lastUpdatedDateTime?: Date;
    /**
     * Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
     */
    sentimentAnalysisSettings?: SentimentAnalysisSettings;
}
