import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides a summary of the properties of a solution version. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a> API.
 */
export declare class SolutionVersionSummary extends SpeakeasyBase {
    creationDateTime?: Date;
    failureReason?: string;
    lastUpdatedDateTime?: Date;
    solutionVersionArn?: string;
    status?: string;
}
