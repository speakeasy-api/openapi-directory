import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionStatusEnum } from "./collectionstatusenum";
/**
 * Details about each OpenSearch Serverless collection.
 */
export declare class CollectionSummary extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
    status?: CollectionStatusEnum;
}
