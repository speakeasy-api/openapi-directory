import { SpeakeasyBase } from "../../../internal/utils";
import { HostKeyAttributes } from "./hostkeyattributes";
import { InstanceAccessProtocolEnum } from "./instanceaccessprotocolenum";
import { PasswordData } from "./passworddata";
/**
 * The parameters for gaining temporary access to one of your Amazon Lightsail instances.
 */
export declare class InstanceAccessDetails extends SpeakeasyBase {
    certKey?: string;
    expiresAt?: Date;
    hostKeys?: HostKeyAttributes[];
    instanceName?: string;
    ipAddress?: string;
    password?: string;
    passwordData?: PasswordData;
    privateKey?: string;
    protocol?: InstanceAccessProtocolEnum;
    username?: string;
}
