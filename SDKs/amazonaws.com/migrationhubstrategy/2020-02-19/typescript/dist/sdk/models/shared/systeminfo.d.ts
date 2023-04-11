import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkInfo } from "./networkinfo";
import { OSInfo } from "./osinfo";
/**
 *  Information about the server that hosts application components.
 */
export declare class SystemInfo extends SpeakeasyBase {
    cpuArchitecture?: string;
    fileSystemType?: string;
    networkInfoList?: NetworkInfo[];
    osInfo?: OSInfo;
}
