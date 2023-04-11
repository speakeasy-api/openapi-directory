import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Gathers information about when a particular result was clicked by a user. Your application uses the <code>SubmitFeedback</code> API to provide click information.
 */
export declare class ClickFeedback extends SpeakeasyBase {
    clickTime: Date;
    resultId: string;
}
