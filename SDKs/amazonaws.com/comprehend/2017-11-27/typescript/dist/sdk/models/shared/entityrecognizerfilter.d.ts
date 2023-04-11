import { SpeakeasyBase } from "../../../internal/utils";
import { ModelStatusEnum } from "./modelstatusenum";
/**
 * Provides information for filtering a list of entity recognizers. You can only specify one filtering parameter in a request. For more information, see the <code>ListEntityRecognizers</code> operation./&gt;
 */
export declare class EntityRecognizerFilter extends SpeakeasyBase {
    recognizerName?: string;
    status?: ModelStatusEnum;
    submitTimeAfter?: Date;
    submitTimeBefore?: Date;
}
