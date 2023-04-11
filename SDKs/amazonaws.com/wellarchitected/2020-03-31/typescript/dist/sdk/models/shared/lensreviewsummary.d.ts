import { SpeakeasyBase } from "../../../internal/utils";
import { LensStatusEnum } from "./lensstatusenum";
/**
 * A lens review summary of a workload.
 */
export declare class LensReviewSummary extends SpeakeasyBase {
    /**
     * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2::lens/serverless</code>.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1:123456789012:lens/my-lens</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
     */
    lensAlias?: string;
    lensArn?: string;
    /**
     * The full name of the lens.
     */
    lensName?: string;
    lensStatus?: LensStatusEnum;
    lensVersion?: string;
    /**
     * A map from risk names to the count of how questions have that rating.
     */
    riskCounts?: Record<string, number>;
    /**
     * The date and time recorded.
     */
    updatedAt?: Date;
}
