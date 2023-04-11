import { SpeakeasyBase } from "../../../internal/utils";
import { DifferenceStatusEnum } from "./differencestatusenum";
/**
 * A question difference return object.
 */
export declare class QuestionDifference extends SpeakeasyBase {
    differenceStatus?: DifferenceStatusEnum;
    /**
     * The ID of the question.
     */
    questionId?: string;
    /**
     * The title of the question.
     */
    questionTitle?: string;
}
