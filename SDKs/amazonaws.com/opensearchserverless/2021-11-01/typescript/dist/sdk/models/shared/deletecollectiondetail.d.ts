import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionStatusEnum } from "./collectionstatusenum";
/**
 * Details about a deleted OpenSearch Serverless collection.
 */
export declare class DeleteCollectionDetail extends SpeakeasyBase {
    id?: string;
    name?: string;
    status?: CollectionStatusEnum;
}
