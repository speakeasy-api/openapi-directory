import { SpeakeasyBase } from "../../../internal/utils";
import { ReferenceStoreDetail } from "./referencestoredetail";
/**
 * Success
 */
export declare class ListReferenceStoresResponse extends SpeakeasyBase {
    nextToken?: string;
    referenceStores: ReferenceStoreDetail[];
}
