import { SpeakeasyBase } from "../../../internal/utils";
import { VirtualMFADevice } from "./virtualmfadevice";
/**
 * Contains the response to a successful <a>ListVirtualMFADevices</a> request.
 */
export declare class ListVirtualMFADevicesResponse extends SpeakeasyBase {
    isTruncated?: boolean;
    marker?: string;
    virtualMFADevices: VirtualMFADevice[];
}
