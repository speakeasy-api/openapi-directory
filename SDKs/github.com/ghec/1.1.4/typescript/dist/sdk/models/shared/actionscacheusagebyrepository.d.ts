import { SpeakeasyBase } from "../../../internal/utils";
/**
 * GitHub Actions Cache Usage by repository.
 */
export declare class ActionsCacheUsageByRepository extends SpeakeasyBase {
    /**
     * The number of active caches in the repository.
     */
    activeCachesCount: number;
    /**
     * The sum of the size in bytes of all the active cache items in the repository.
     */
    activeCachesSizeInBytes: number;
    /**
     * The repository owner and name for the cache usage being shown.
     */
    fullName: string;
}
