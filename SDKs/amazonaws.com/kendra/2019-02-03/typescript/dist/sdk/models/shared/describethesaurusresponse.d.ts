import { SpeakeasyBase } from "../../../internal/utils";
import { S3Path } from "./s3path";
import { ThesaurusStatusEnum } from "./thesaurusstatusenum";
/**
 * Success
 */
export declare class DescribeThesaurusResponse extends SpeakeasyBase {
    createdAt?: Date;
    description?: string;
    errorMessage?: string;
    fileSizeBytes?: number;
    id?: string;
    indexId?: string;
    name?: string;
    roleArn?: string;
    /**
     * Information required to find a specific file in an Amazon S3 bucket.
     */
    sourceS3Path?: S3Path;
    status?: ThesaurusStatusEnum;
    synonymRuleCount?: number;
    termCount?: number;
    updatedAt?: Date;
}
