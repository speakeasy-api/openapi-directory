import { SpeakeasyBase } from "../../../internal/utils";
import { MFADevice } from "./mfadevice";
/**
 * Contains the response to a successful <a>ListMFADevices</a> request.
 */
export declare class ListMFADevicesResponse extends SpeakeasyBase {
    isTruncated?: boolean;
    mfaDevices: MFADevice[];
    marker?: string;
}
