import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionStatusEnum } from "./collectionstatusenum";
/**
 * List of filter keys that you can use for LIST, UPDATE, and DELETE requests to OpenSearch Serverless collections.
 */
export declare class CollectionFilters extends SpeakeasyBase {
    name?: string;
    status?: CollectionStatusEnum;
}
