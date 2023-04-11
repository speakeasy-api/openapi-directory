import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Lens upgrade summary return object.
 */
export declare class LensUpgradeSummary extends SpeakeasyBase {
    currentLensVersion?: string;
    latestLensVersion?: string;
    /**
     * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2::lens/serverless</code>.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1:123456789012:lens/my-lens</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
     */
    lensAlias?: string;
    lensArn?: string;
    /**
     * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
     */
    workloadId?: string;
    /**
     * <p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>
     */
    workloadName?: string;
}
