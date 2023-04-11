import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A report of a lens review.
 */
export declare class LensReviewReport extends SpeakeasyBase {
    /**
     * <p>The Base64-encoded string representation of a lens review report.</p> <p>This data can be used to create a PDF file.</p>
     */
    base64String?: string;
    /**
     * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2::lens/serverless</code>.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1:123456789012:lens/my-lens</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
     */
    lensAlias?: string;
    lensArn?: string;
}
