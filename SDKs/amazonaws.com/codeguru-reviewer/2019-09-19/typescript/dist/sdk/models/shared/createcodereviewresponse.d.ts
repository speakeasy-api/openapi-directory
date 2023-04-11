import { SpeakeasyBase } from "../../../internal/utils";
import { CodeReview } from "./codereview";
/**
 * Success
 */
export declare class CreateCodeReviewResponse extends SpeakeasyBase {
    /**
     * Information about a code review. A code review belongs to the associated repository that contains the reviewed code.
     */
    codeReview?: CodeReview;
}
