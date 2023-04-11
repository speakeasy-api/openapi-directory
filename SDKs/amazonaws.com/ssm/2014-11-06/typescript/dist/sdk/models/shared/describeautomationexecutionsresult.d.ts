import { SpeakeasyBase } from "../../../internal/utils";
import { AutomationExecutionMetadata } from "./automationexecutionmetadata";
/**
 * Success
 */
export declare class DescribeAutomationExecutionsResult extends SpeakeasyBase {
    automationExecutionMetadataList?: AutomationExecutionMetadata[];
    nextToken?: string;
}
