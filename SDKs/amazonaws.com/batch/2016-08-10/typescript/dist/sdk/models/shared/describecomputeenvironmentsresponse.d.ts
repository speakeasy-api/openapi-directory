import { SpeakeasyBase } from "../../../internal/utils";
import { ComputeEnvironmentDetail } from "./computeenvironmentdetail";
/**
 * Success
 */
export declare class DescribeComputeEnvironmentsResponse extends SpeakeasyBase {
    computeEnvironments?: ComputeEnvironmentDetail[];
    nextToken?: string;
}
