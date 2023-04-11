import { SpeakeasyBase } from "../../../internal/utils";
import { AuthTypeEnum } from "./authtypeenum";
import { OSTypeEnum } from "./ostypeenum";
/**
 * IP address based configurations.
 */
export declare class IPAddressBasedRemoteInfo extends SpeakeasyBase {
    authType?: AuthTypeEnum;
    ipAddressConfigurationTimeStamp?: string;
    osType?: OSTypeEnum;
}
