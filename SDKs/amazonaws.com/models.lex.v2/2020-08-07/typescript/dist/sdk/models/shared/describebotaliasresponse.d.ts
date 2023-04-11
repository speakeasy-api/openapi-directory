import { SpeakeasyBase } from "../../../internal/utils";
import { BotAliasHistoryEvent } from "./botaliashistoryevent";
import { BotAliasLocaleSettings } from "./botaliaslocalesettings";
import { BotAliasStatusEnum } from "./botaliasstatusenum";
import { ConversationLogSettings } from "./conversationlogsettings";
import { ParentBotNetwork } from "./parentbotnetwork";
import { SentimentAnalysisSettings } from "./sentimentanalysissettings";
/**
 * Success
 */
export declare class DescribeBotAliasResponse extends SpeakeasyBase {
    botAliasHistoryEvents?: BotAliasHistoryEvent[];
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
    parentBotNetworks?: ParentBotNetwork[];
    /**
     * Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
     */
    sentimentAnalysisSettings?: SentimentAnalysisSettings;
}
