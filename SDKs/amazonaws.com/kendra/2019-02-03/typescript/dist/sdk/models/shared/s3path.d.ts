import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information required to find a specific file in an Amazon S3 bucket.
 */
export declare class S3Path extends SpeakeasyBase {
    bucket: string;
    key: string;
}
