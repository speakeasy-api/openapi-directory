import { SpeakeasyBase } from "../../../internal/utils";
import { CacheNodeTypeSpecificParametersList } from "./cachenodetypespecificparameterslist";
import { ParametersList } from "./parameterslist";
/**
 * Represents the output of a <code>DescribeCacheParameters</code> operation.
**/
export declare class CacheParameterGroupDetails extends SpeakeasyBase {
    cacheNodeTypeSpecificParameters?: CacheNodeTypeSpecificParametersList[];
    marker?: string;
    parameters?: ParametersList[];
}
