import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input of a <code>DescribeCacheParameters</code> operation.
 */
export declare class DescribeCacheParametersMessage extends SpeakeasyBase {
    cacheParameterGroupName: string;
    marker?: string;
    maxRecords?: number;
    source?: string;
}
