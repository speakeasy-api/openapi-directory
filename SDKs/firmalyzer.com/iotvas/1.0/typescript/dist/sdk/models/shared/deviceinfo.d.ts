import { SpeakeasyBase } from "../../../internal/utils";
import { Vulnerability } from "./vulnerability";
export declare class DeviceInfoFirmwareInfo extends SpeakeasyBase {
    downloadUrl?: string;
    name?: string;
    releaseDate?: string;
    sha2?: string;
    version?: string;
}
export declare class DeviceInfo extends SpeakeasyBase {
    cveList?: Vulnerability[];
    deviceType?: string;
    firmwareInfo?: DeviceInfoFirmwareInfo;
    firmwareVersion?: string;
    isDiscontinued?: boolean;
    latestFirmwareInfo?: DeviceInfoFirmwareInfo;
    manufacturer?: string;
    modelName?: string;
}
