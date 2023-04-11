import { SpeakeasyBase } from "../../../internal/utils";
import { AssociatedClientDevice } from "./associatedclientdevice";
/**
 * Success
 */
export declare class ListClientDevicesAssociatedWithCoreDeviceResponse extends SpeakeasyBase {
    associatedClientDevices?: AssociatedClientDevice[];
    nextToken?: string;
}
