import { SpeakeasyBase } from "../../../internal/utils";
import { BotAliasStatusEnum } from "./botaliasstatusenum";
/**
 * Summary information about bot aliases returned from the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBotAliases.html">ListBotAliases</a> operation.
 */
export declare class BotAliasSummary extends SpeakeasyBase {
    botAliasId?: string;
    botAliasName?: string;
    botAliasStatus?: BotAliasStatusEnum;
    botVersion?: string;
    creationDateTime?: Date;
    description?: string;
    lastUpdatedDateTime?: Date;
}
