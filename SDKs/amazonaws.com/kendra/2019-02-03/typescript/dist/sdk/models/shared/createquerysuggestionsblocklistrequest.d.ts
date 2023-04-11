import { SpeakeasyBase } from "../../../internal/utils";
import { S3Path } from "./s3path";
import { Tag } from "./tag";
export declare class CreateQuerySuggestionsBlockListRequest extends SpeakeasyBase {
    clientToken?: string;
    description?: string;
    indexId: string;
    name: string;
    roleArn: string;
    sourceS3Path: S3Path;
    tags?: Tag[];
}
