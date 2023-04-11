import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceIdentifierStatusEnum } from "./deviceidentifierstatusenum";
/**
 * Information about a subscriber of a device that can use a network.
 */
export declare class DeviceIdentifier extends SpeakeasyBase {
    createdAt?: Date;
    deviceIdentifierArn?: string;
    iccid?: string;
    imsi?: string;
    networkArn?: string;
    orderArn?: string;
    status?: DeviceIdentifierStatusEnum;
    trafficGroupArn?: string;
    vendor?: string;
}
