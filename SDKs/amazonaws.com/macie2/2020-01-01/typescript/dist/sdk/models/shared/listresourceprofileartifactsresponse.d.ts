import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceProfileArtifact } from "./resourceprofileartifact";
/**
 * Success
 */
export declare class ListResourceProfileArtifactsResponse extends SpeakeasyBase {
    artifacts?: ResourceProfileArtifact[];
    nextToken?: string;
}
