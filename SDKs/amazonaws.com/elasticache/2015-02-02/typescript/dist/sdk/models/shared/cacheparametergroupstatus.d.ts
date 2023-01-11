import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Status of the cache parameter group.
**/
export declare class CacheParameterGroupStatus extends SpeakeasyBase {
    cacheNodeIdsToReboot?: Record<string, any>[];
    cacheParameterGroupName?: string;
    parameterApplyStatus?: string;
}
