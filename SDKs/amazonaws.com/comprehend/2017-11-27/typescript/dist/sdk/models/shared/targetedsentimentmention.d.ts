import { SpeakeasyBase } from "../../../internal/utils";
import { MentionSentiment } from "./mentionsentiment";
import { TargetedSentimentEntityTypeEnum } from "./targetedsentimententitytypeenum";
/**
 * <p>Information about one mention of an entity. The mention information includes the location of the mention in the text and the sentiment of the mention.</p> <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p>
 */
export declare class TargetedSentimentMention extends SpeakeasyBase {
    beginOffset?: number;
    endOffset?: number;
    groupScore?: number;
    mentionSentiment?: MentionSentiment;
    score?: number;
    text?: string;
    type?: TargetedSentimentEntityTypeEnum;
}
