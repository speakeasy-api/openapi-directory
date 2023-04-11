import { SpeakeasyBase } from "../../../internal/utils";
export declare class CollectionMetaOneWayCombinations extends SpeakeasyBase {
    flightOfferIds?: string[];
    originDestinationId?: string;
}
export declare class CollectionMeta extends SpeakeasyBase {
    count?: number;
    oneWayCombinations?: CollectionMetaOneWayCombinations[];
}
