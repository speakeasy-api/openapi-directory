import { SpeakeasyBase } from "../../../internal/utils";
import { VersionDifferences } from "./versiondifferences";
/**
 * Success
 */
export declare class GetLensVersionDifferenceOutput extends SpeakeasyBase {
    baseLensVersion?: string;
    latestLensVersion?: string;
    /**
     * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2::lens/serverless</code>.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1:123456789012:lens/my-lens</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
     */
    lensAlias?: string;
    lensArn?: string;
    targetLensVersion?: string;
    /**
     * The differences between the base and latest versions of the lens.
     */
    versionDifferences?: VersionDifferences;
}
