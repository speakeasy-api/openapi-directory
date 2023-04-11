import { SpeakeasyBase } from "../../../internal/utils";
import { OSTypeEnum } from "./ostypeenum";
/**
 * Details about the server in vCenter.
 */
export declare class VcenterBasedRemoteInfo extends SpeakeasyBase {
    osType?: OSTypeEnum;
    vcenterConfigurationTimeStamp?: string;
}
