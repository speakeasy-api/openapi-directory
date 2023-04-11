import { SpeakeasyBase } from "../../../internal/utils";
import { TargetedSentimentMention } from "./targetedsentimentmention";
/**
 * <p>Information about one of the entities found by targeted sentiment analysis.</p> <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p>
 */
export declare class TargetedSentimentEntity extends SpeakeasyBase {
    descriptiveMentionIndex?: number[];
    mentions?: TargetedSentimentMention[];
}
