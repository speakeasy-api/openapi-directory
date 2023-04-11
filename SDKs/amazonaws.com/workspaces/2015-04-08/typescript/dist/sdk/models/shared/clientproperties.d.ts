import { SpeakeasyBase } from "../../../internal/utils";
import { LogUploadEnumEnum } from "./loguploadenumenum";
import { ReconnectEnumEnum } from "./reconnectenumenum";
/**
 * Describes an Amazon WorkSpaces client.
 */
export declare class ClientProperties extends SpeakeasyBase {
    logUploadEnabled?: LogUploadEnumEnum;
    reconnectEnabled?: ReconnectEnumEnum;
}
