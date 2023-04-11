import { SpeakeasyBase } from "../../../internal/utils";
import { BotLocaleStatusEnum } from "./botlocalestatusenum";
/**
 * Summary information about bot locales returned by the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_ListBotLocales.html">ListBotLocales</a> operation.
 */
export declare class BotLocaleSummary extends SpeakeasyBase {
    botLocaleStatus?: BotLocaleStatusEnum;
    description?: string;
    lastBuildSubmittedDateTime?: Date;
    lastUpdatedDateTime?: Date;
    localeId?: string;
    localeName?: string;
}
