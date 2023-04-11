import { SpeakeasyBase } from "../../../internal/utils";
import { S3Path } from "./s3path";
export declare class UpdateQuerySuggestionsBlockListRequest extends SpeakeasyBase {
    description?: string;
    id: string;
    indexId: string;
    name?: string;
    roleArn?: string;
    sourceS3Path?: S3Path;
}
