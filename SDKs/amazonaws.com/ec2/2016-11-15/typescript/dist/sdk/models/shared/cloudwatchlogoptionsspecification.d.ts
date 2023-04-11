import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options for sending VPN tunnel logs to CloudWatch.
 */
export declare class CloudWatchLogOptionsSpecification extends SpeakeasyBase {
    logEnabled?: boolean;
    logGroupArn?: string;
    logOutputFormat?: string;
}
