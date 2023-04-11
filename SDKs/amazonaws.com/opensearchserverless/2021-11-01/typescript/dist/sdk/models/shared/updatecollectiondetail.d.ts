import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionStatusEnum } from "./collectionstatusenum";
import { CollectionTypeEnum } from "./collectiontypeenum";
/**
 * Details about an updated OpenSearch Serverless collection.
 */
export declare class UpdateCollectionDetail extends SpeakeasyBase {
    arn?: string;
    createdDate?: number;
    description?: string;
    id?: string;
    lastModifiedDate?: number;
    name?: string;
    status?: CollectionStatusEnum;
    type?: CollectionTypeEnum;
}
