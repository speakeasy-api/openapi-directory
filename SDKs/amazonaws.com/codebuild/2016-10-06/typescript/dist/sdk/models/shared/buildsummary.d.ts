import { SpeakeasyBase } from "../../../internal/utils";
import { ResolvedArtifact } from "./resolvedartifact";
import { StatusTypeEnum } from "./statustypeenum";
/**
 * Contains summary information about a batch build group.
 */
export declare class BuildSummary extends SpeakeasyBase {
    arn?: string;
    buildStatus?: StatusTypeEnum;
    primaryArtifact?: ResolvedArtifact;
    requestedOn?: Date;
    secondaryArtifacts?: ResolvedArtifact[];
}
