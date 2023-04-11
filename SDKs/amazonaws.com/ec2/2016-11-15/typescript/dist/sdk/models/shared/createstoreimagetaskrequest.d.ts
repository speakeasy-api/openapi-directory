import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The tags to apply to the AMI object that will be stored in the Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html">Categorizing your storage using tags</a> in the <i>Amazon Simple Storage Service User Guide</i>.
 */
export declare class CreateStoreImageTaskRequestS3ObjectTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
export declare class CreateStoreImageTaskRequest extends SpeakeasyBase {
    bucket: string;
    dryRun?: boolean;
    imageId: string;
    s3ObjectTags?: CreateStoreImageTaskRequestS3ObjectTags[];
}
