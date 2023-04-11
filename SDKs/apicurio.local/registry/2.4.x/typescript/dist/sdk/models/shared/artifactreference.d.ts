import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A reference to a different artifact. Typically used with artifact types that can have dependencies like Protobuf.
 */
export declare class ArtifactReference extends SpeakeasyBase {
    artifactId: string;
    groupId: string;
    name: string;
    version?: string;
}
