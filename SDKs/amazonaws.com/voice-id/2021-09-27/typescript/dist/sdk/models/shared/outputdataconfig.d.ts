import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration containing output file information for a batch job.
 */
export declare class OutputDataConfig extends SpeakeasyBase {
    kmsKeyId?: string;
    s3Uri: string;
}
