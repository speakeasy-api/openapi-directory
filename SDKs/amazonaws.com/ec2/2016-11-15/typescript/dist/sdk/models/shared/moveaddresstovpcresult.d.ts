import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of the move of the IP address.
 */
export declare enum MoveAddressToVpcResultStatusEnum {
    MoveInProgress = "MoveInProgress",
    InVpc = "InVpc",
    InClassic = "InClassic"
}
/**
 * Success
 */
export declare class MoveAddressToVpcResult extends SpeakeasyBase {
    allocationId?: string;
    status?: MoveAddressToVpcResultStatusEnum;
}
