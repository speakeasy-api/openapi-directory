import { SpeakeasyBase } from "../../../internal/utils";
import { Dependency } from "./dependency";
export declare class ManifestFile extends SpeakeasyBase {
    /**
     * The path of the manifest file relative to the root of the Git repository.
     */
    sourceLocation?: string;
}
export declare class Manifest extends SpeakeasyBase {
    file?: ManifestFile;
    /**
     * User-defined metadata to store domain-specific information limited to 8 keys with scalar values.
     */
    metadata?: Record<string, any>;
    /**
     * The name of the manifest.
     */
    name: string;
    /**
     * A collection of resolved package dependencies.
     */
    resolved?: Record<string, Dependency>;
}
