import { SpeakeasyBase } from "../../../internal/utils";
import { CacheEngineVersionList } from "./cacheengineversionlist";
/**
 * Represents the output of a <a>DescribeCacheEngineVersions</a> operation.
 */
export declare class CacheEngineVersionMessage extends SpeakeasyBase {
    cacheEngineVersions?: CacheEngineVersionList[];
    marker?: string;
}
