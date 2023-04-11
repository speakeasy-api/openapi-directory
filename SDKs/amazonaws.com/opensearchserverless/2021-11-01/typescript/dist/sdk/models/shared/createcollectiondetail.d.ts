import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionStatusEnum } from "./collectionstatusenum";
import { CollectionTypeEnum } from "./collectiontypeenum";
/**
 * Details about the created OpenSearch Serverless collection.
 */
export declare class CreateCollectionDetail extends SpeakeasyBase {
    arn?: string;
    createdDate?: number;
    description?: string;
    id?: string;
    kmsKeyArn?: string;
    lastModifiedDate?: number;
    name?: string;
    status?: CollectionStatusEnum;
    type?: CollectionTypeEnum;
}
