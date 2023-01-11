import { SpeakeasyBase } from "../../../internal/utils";
import { CacheNodeTypeSpecificParametersList } from "./cachenodetypespecificparameterslist";
import { ParametersList } from "./parameterslist";
/**
 * Represents the output of a <code>DescribeEngineDefaultParameters</code> operation.
**/
export declare class EngineDefaults extends SpeakeasyBase {
    cacheNodeTypeSpecificParameters?: CacheNodeTypeSpecificParametersList[];
    cacheParameterGroupFamily?: string;
    marker?: string;
    parameters?: ParametersList[];
}
