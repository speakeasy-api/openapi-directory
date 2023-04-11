import { SpeakeasyBase } from "../../../internal/utils";
import { ClickFeedback } from "./clickfeedback";
import { RelevanceFeedback } from "./relevancefeedback";
export declare class SubmitFeedbackRequest extends SpeakeasyBase {
    clickFeedbackItems?: ClickFeedback[];
    indexId: string;
    queryId: string;
    relevanceFeedbackItems?: RelevanceFeedback[];
}
