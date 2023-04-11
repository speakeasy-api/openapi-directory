import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the destination configuration to use when publishing message sending events.
 */
export declare class CloudWatchLogsDestination extends SpeakeasyBase {
    iamRoleArn: string;
    logGroupArn: string;
}
