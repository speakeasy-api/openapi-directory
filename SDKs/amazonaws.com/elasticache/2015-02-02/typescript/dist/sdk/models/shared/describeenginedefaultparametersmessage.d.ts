import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input of a <code>DescribeEngineDefaultParameters</code> operation.
 */
export declare class DescribeEngineDefaultParametersMessage extends SpeakeasyBase {
    cacheParameterGroupFamily: string;
    marker?: string;
    maxRecords?: number;
}
