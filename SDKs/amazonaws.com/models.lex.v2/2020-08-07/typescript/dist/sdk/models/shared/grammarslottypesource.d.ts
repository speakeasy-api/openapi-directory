import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the Amazon S3 bucket name and location for the grammar that is the source for the slot type.
 */
export declare class GrammarSlotTypeSource extends SpeakeasyBase {
    kmsKeyArn?: string;
    s3BucketName: string;
    s3ObjectKey: string;
}
