import { SpeakeasyBase } from "../../../internal/utils";
import { RemediationExecutionStatus } from "./remediationexecutionstatus";
/**
 * Success
 */
export declare class DescribeRemediationExecutionStatusResponse extends SpeakeasyBase {
    nextToken?: string;
    remediationExecutionStatuses?: RemediationExecutionStatus[];
}
