import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateVirtualMFADeviceRequest extends SpeakeasyBase {
    path?: string;
    tags?: Tag[];
    virtualMFADeviceName: string;
}
