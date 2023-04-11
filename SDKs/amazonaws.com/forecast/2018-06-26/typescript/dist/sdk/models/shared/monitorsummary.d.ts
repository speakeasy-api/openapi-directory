import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides a summary of the monitor properties used in the <a>ListMonitors</a> operation. To get a complete set of properties, call the <a>DescribeMonitor</a> operation, and provide the listed <code>MonitorArn</code>.
 */
export declare class MonitorSummary extends SpeakeasyBase {
    creationTime?: Date;
    lastModificationTime?: Date;
    monitorArn?: string;
    monitorName?: string;
    resourceArn?: string;
    status?: string;
}
