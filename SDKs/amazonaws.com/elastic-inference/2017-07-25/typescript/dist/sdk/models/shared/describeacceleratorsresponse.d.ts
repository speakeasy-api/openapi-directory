import { SpeakeasyBase } from "../../../internal/utils";
import { ElasticInferenceAccelerator } from "./elasticinferenceaccelerator";
/**
 * Success
 */
export declare class DescribeAcceleratorsResponse extends SpeakeasyBase {
    acceleratorSet?: ElasticInferenceAccelerator[];
    nextToken?: string;
}
