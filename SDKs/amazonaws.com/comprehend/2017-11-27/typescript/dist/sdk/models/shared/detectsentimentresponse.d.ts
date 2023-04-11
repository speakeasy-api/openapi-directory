import { SpeakeasyBase } from "../../../internal/utils";
import { SentimentScore } from "./sentimentscore";
import { SentimentTypeEnum } from "./sentimenttypeenum";
/**
 * Success
 */
export declare class DetectSentimentResponse extends SpeakeasyBase {
    sentiment?: SentimentTypeEnum;
    sentimentScore?: SentimentScore;
}
