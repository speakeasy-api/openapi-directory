import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a 'commit' secret scanning location type. This location type shows that a secret was detected inside a commit to a repository.
 */
export declare class SecretScanningLocationCommit extends SpeakeasyBase {
    /**
     * SHA-1 hash ID of the associated blob
     */
    blobSha: string;
    /**
     * The API URL to get the associated blob resource
     */
    blobUrl: string;
    /**
     * SHA-1 hash ID of the associated commit
     */
    commitSha: string;
    /**
     * The API URL to get the associated commit resource
     */
    commitUrl: string;
    /**
     * The column at which the secret ends within the end line when the file is interpreted as 8BIT ASCII
     */
    endColumn: number;
    /**
     * Line number at which the secret ends in the file
     */
    endLine: number;
    /**
     * The file path in the repository
     */
    path: string;
    /**
     * The column at which the secret starts within the start line when the file is interpreted as 8BIT ASCII
     */
    startColumn: number;
    /**
     * Line number at which the secret starts in the file
     */
    startLine: number;
}
