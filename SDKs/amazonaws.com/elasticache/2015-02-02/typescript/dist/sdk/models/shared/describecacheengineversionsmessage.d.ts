import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input of a <code>DescribeCacheEngineVersions</code> operation.
 */
export declare class DescribeCacheEngineVersionsMessage extends SpeakeasyBase {
    cacheParameterGroupFamily?: string;
    defaultOnly?: boolean;
    engine?: string;
    engineVersion?: string;
    marker?: string;
    maxRecords?: number;
}
