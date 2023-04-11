import { SpeakeasyBase } from "../../../internal/utils";
import { ClientDeviceTypeEnum } from "./clientdevicetypeenum";
export declare class DeleteClientBrandingRequest extends SpeakeasyBase {
    platforms: ClientDeviceTypeEnum[];
    resourceId: string;
}
