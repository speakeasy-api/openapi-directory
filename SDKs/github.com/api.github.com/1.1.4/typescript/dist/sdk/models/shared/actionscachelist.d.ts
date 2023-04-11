import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActionsCacheListActionsCaches extends SpeakeasyBase {
    createdAt?: Date;
    id?: number;
    key?: string;
    lastAccessedAt?: Date;
    ref?: string;
    sizeInBytes?: number;
    version?: string;
}
/**
 * Repository actions caches
 */
export declare class ActionsCacheList extends SpeakeasyBase {
    /**
     * Array of caches
     */
    actionsCaches: ActionsCacheListActionsCaches[];
    /**
     * Total number of caches
     */
    totalCount: number;
}
