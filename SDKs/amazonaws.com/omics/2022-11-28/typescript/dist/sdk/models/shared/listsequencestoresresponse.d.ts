import { SpeakeasyBase } from "../../../internal/utils";
import { SequenceStoreDetail } from "./sequencestoredetail";
/**
 * Success
 */
export declare class ListSequenceStoresResponse extends SpeakeasyBase {
    nextToken?: string;
    sequenceStores: SequenceStoreDetail[];
}
