import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Object represents the question and client's answer, used in cloud call center / IVR campaign
 */
export declare class QuestionResponse extends SpeakeasyBase {
    /**
     * A text of a question
     */
    question?: string;
    /**
     * Client's answer
     */
    response?: string;
}
