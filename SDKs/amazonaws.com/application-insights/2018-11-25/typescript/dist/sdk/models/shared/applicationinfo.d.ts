import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the status of the application.
**/
export declare class ApplicationInfo extends SpeakeasyBase {
    cweMonitorEnabled?: boolean;
    lifeCycle?: string;
    opsCenterEnabled?: boolean;
    opsItemSNSTopicArn?: string;
    remarks?: string;
    resourceGroupName?: string;
}
