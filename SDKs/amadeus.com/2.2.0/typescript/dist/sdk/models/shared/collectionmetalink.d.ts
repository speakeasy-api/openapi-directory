import { SpeakeasyBase } from "../../../internal/utils";
export declare class CollectionMetaLinkCollectionLinks extends SpeakeasyBase {
    first?: string;
    last?: string;
    next?: string;
    previous?: string;
    self?: string;
    up?: string;
}
export declare class CollectionMetaLink extends SpeakeasyBase {
    count?: number;
    links?: CollectionMetaLinkCollectionLinks;
}
