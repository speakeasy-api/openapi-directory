import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p/>
 */
export declare class DescribeClusterParametersMessage extends SpeakeasyBase {
    marker?: string;
    maxRecords?: number;
    parameterGroupName: string;
    source?: string;
}
