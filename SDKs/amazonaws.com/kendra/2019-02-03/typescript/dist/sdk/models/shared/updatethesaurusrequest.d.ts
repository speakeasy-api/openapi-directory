import { SpeakeasyBase } from "../../../internal/utils";
import { S3Path } from "./s3path";
export declare class UpdateThesaurusRequest extends SpeakeasyBase {
    description?: string;
    id: string;
    indexId: string;
    name?: string;
    roleArn?: string;
    /**
     * Information required to find a specific file in an Amazon S3 bucket.
     */
    sourceS3Path?: S3Path;
}
