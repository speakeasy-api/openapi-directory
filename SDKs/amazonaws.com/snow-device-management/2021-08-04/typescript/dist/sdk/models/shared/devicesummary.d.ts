import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Identifying information about the device.
 */
export declare class DeviceSummary extends SpeakeasyBase {
    associatedWithJob?: string;
    managedDeviceArn?: string;
    managedDeviceId?: string;
    tags?: Record<string, string>;
}
