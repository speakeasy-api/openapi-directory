import { SpeakeasyBase } from "../../../internal/utils";
import { AnswerSummary } from "./answersummary";
/**
 * Output of a list answers call.
 */
export declare class ListAnswersOutput extends SpeakeasyBase {
    /**
     * List of answer summaries of lens review in a workload.
     */
    answerSummaries?: AnswerSummary[];
    /**
     * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2::lens/serverless</code>.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1:123456789012:lens/my-lens</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
     */
    lensAlias?: string;
    lensArn?: string;
    /**
     * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
     */
    milestoneNumber?: number;
    /**
     * The token to use to retrieve the next set of results.
     */
    nextToken?: string;
    /**
     * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
     */
    workloadId?: string;
}
