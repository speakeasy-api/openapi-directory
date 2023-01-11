import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides the bucket name and object key name that stores the reference data.
**/
export declare class S3ReferenceDataSourceDescription extends SpeakeasyBase {
    bucketARN: string;
    fileKey: string;
    referenceRoleARN: string;
}
