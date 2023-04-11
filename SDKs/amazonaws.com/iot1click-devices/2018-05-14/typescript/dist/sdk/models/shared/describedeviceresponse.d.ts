import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Device details.
 */
export declare class DescribeDeviceResponseDeviceDescription extends SpeakeasyBase {
    arn?: string;
    attributes?: Record<string, string>;
    deviceId?: string;
    enabled?: boolean;
    remainingLife?: number;
    tags?: Record<string, string>;
    type?: string;
}
/**
 * Success
 */
export declare class DescribeDeviceResponse extends SpeakeasyBase {
    deviceDescription?: DescribeDeviceResponseDeviceDescription;
}
