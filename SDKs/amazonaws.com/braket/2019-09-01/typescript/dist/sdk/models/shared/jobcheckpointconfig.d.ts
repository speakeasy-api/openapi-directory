import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about the output locations for job checkpoint data.
 */
export declare class JobCheckpointConfig extends SpeakeasyBase {
    localPath?: string;
    s3Uri: string;
}
