import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionDetail } from "./collectiondetail";
import { CollectionErrorDetail } from "./collectionerrordetail";
/**
 * Success
 */
export declare class BatchGetCollectionResponse extends SpeakeasyBase {
    collectionDetails?: CollectionDetail[];
    collectionErrorDetails?: CollectionErrorDetail[];
}
