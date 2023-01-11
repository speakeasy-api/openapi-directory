import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Device details.
**/
export declare class DescribeDeviceResponseDeviceDescription extends SpeakeasyBase {
    arn?: Record<string, any>;
    attributes?: Record<string, string>;
    deviceId?: Record<string, any>;
    enabled?: Record<string, any>;
    remainingLife?: Record<string, any>;
    tags?: Record<string, string>;
    type?: Record<string, any>;
}
export declare class DescribeDeviceResponse extends SpeakeasyBase {
    deviceDescription?: DescribeDeviceResponseDeviceDescription;
}
