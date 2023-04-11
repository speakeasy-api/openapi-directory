import { SpeakeasyBase } from "../../../internal/utils";
import { FallbackResultEnum } from "./fallbackresultenum";
/**
 * Configuration information for optional message review.
 */
export declare class MessageReviewHandler extends SpeakeasyBase {
    fallbackResult?: FallbackResultEnum;
    uri?: string;
}
