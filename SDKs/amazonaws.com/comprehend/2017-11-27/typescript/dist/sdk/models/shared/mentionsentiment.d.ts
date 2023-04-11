import { SpeakeasyBase } from "../../../internal/utils";
import { SentimentScore } from "./sentimentscore";
import { SentimentTypeEnum } from "./sentimenttypeenum";
/**
 * <p>Contains the sentiment and sentiment score for one mention of an entity.</p> <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p>
 */
export declare class MentionSentiment extends SpeakeasyBase {
    sentiment?: SentimentTypeEnum;
    /**
     * Describes the level of confidence that Amazon Comprehend has in the accuracy of its detection of sentiments.
     */
    sentimentScore?: SentimentScore;
}
