import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The move status for the IP address.
 */
export declare enum RestoreAddressToClassicResultStatusEnum {
    MoveInProgress = "MoveInProgress",
    InVpc = "InVpc",
    InClassic = "InClassic"
}
/**
 * Success
 */
export declare class RestoreAddressToClassicResult extends SpeakeasyBase {
    publicIp?: string;
    status?: RestoreAddressToClassicResultStatusEnum;
}
