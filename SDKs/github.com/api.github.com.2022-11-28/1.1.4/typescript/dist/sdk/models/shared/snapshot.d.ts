import { SpeakeasyBase } from "../../../internal/utils";
import { Manifest } from "./manifest";
/**
 * A description of the detector used.
 */
export declare class SnapshotDetector extends SpeakeasyBase {
    /**
     * The name of the detector used.
     */
    name: string;
    /**
     * The url of the detector used.
     */
    url: string;
    /**
     * The version of the detector used.
     */
    version: string;
}
export declare class SnapshotJob extends SpeakeasyBase {
    /**
     * Correlator provides a key that is used to group snapshots submitted over time. Only the "latest" submitted snapshot for a given combination of `job.correlator` and `detector.name` will be considered when calculating a repository's current dependencies. Correlator should be as unique as it takes to distinguish all detection runs for a given "wave" of CI workflow you run. If you're using GitHub Actions, a good default value for this could be the environment variables GITHUB_WORKFLOW and GITHUB_JOB concatenated together. If you're using a build matrix, then you'll also need to add additional key(s) to distinguish between each submission inside a matrix variation.
     */
    correlator: string;
    /**
     * The url for the job.
     */
    htmlUrl?: string;
    /**
     * The external ID of the job.
     */
    id: string;
}
/**
 * Create a new snapshot of a repository's dependencies.
 */
export declare class Snapshot extends SpeakeasyBase {
    /**
     * A description of the detector used.
     */
    detector: SnapshotDetector;
    job: SnapshotJob;
    /**
     * A collection of package manifests, which are a collection of related dependencies declared in a file or representing a logical group of dependencies.
     */
    manifests?: Record<string, Manifest>;
    /**
     * User-defined metadata to store domain-specific information limited to 8 keys with scalar values.
     */
    metadata?: Record<string, any>;
    /**
     * The repository branch that triggered this snapshot.
     */
    ref: string;
    /**
     * The time at which the snapshot was scanned.
     */
    scanned: Date;
    /**
     * The commit SHA associated with this dependency snapshot. Maximum length: 40 characters.
     */
    sha: string;
    /**
     * The version of the repository snapshot submission.
     */
    version: number;
}
