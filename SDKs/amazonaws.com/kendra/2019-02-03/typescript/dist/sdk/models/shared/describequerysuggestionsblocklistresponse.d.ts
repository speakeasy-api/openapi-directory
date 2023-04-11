import { SpeakeasyBase } from "../../../internal/utils";
import { QuerySuggestionsBlockListStatusEnum } from "./querysuggestionsblockliststatusenum";
import { S3Path } from "./s3path";
/**
 * Success
 */
export declare class DescribeQuerySuggestionsBlockListResponse extends SpeakeasyBase {
    createdAt?: Date;
    description?: string;
    errorMessage?: string;
    fileSizeBytes?: number;
    id?: string;
    indexId?: string;
    itemCount?: number;
    name?: string;
    roleArn?: string;
    sourceS3Path?: S3Path;
    status?: QuerySuggestionsBlockListStatusEnum;
    updatedAt?: Date;
}
