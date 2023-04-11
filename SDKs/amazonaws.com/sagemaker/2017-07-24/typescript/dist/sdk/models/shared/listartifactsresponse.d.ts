import { SpeakeasyBase } from "../../../internal/utils";
import { ArtifactSummary } from "./artifactsummary";
/**
 * Success
 */
export declare class ListArtifactsResponse extends SpeakeasyBase {
    artifactSummaries?: ArtifactSummary[];
    nextToken?: string;
}
