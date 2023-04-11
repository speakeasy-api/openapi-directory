import { SpeakeasyBase } from "../../../internal/utils";
import { OpenZFSQuotaTypeEnum } from "./openzfsquotatypeenum";
/**
 * The configuration for how much storage a user or group can use on the volume.
 */
export declare class OpenZFSUserOrGroupQuota extends SpeakeasyBase {
    id: number;
    storageCapacityQuotaGiB: number;
    type: OpenZFSQuotaTypeEnum;
}
