import { SpeakeasyBase } from "../../../internal/utils";
import { DiscoveryTypeEnum } from "./discoverytypeenum";
/**
 * Describes the status of the application.
 */
export declare class ApplicationInfo extends SpeakeasyBase {
    autoConfigEnabled?: boolean;
    cweMonitorEnabled?: boolean;
    discoveryType?: DiscoveryTypeEnum;
    lifeCycle?: string;
    opsCenterEnabled?: boolean;
    opsItemSNSTopicArn?: string;
    remarks?: string;
    resourceGroupName?: string;
}
