import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A type of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">SourceCodeType</a> that specifies a code diff between a source and destination branch in an associated repository.
 */
export declare class BranchDiffSourceCodeType extends SpeakeasyBase {
    destinationBranchName: string;
    sourceBranchName: string;
}
