import { SpeakeasyBase } from "../../../internal/utils";
import { RelevanceTypeEnum } from "./relevancetypeenum";
/**
 * Provides feedback on how relevant a document is to a search. Your application uses the <code>SubmitFeedback</code> API to provide relevance information.
 */
export declare class RelevanceFeedback extends SpeakeasyBase {
    relevanceValue: RelevanceTypeEnum;
    resultId: string;
}
