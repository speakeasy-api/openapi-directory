import { SpeakeasyBase } from "../../../internal/utils";
import { ConditionalSpecification } from "./conditionalspecification";
import { DialogState } from "./dialogstate";
import { ResponseSpecification } from "./responsespecification";
/**
 * Provides a setting that determines whether the post-fulfillment response is sent to the user. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete">https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete</a>
 */
export declare class PostFulfillmentStatusSpecification extends SpeakeasyBase {
    failureConditional?: ConditionalSpecification;
    failureNextStep?: DialogState;
    /**
     * Specifies a list of message groups that Amazon Lex uses to respond the user input.
     */
    failureResponse?: ResponseSpecification;
    successConditional?: ConditionalSpecification;
    successNextStep?: DialogState;
    /**
     * Specifies a list of message groups that Amazon Lex uses to respond the user input.
     */
    successResponse?: ResponseSpecification;
    timeoutConditional?: ConditionalSpecification;
    timeoutNextStep?: DialogState;
    /**
     * Specifies a list of message groups that Amazon Lex uses to respond the user input.
     */
    timeoutResponse?: ResponseSpecification;
}
