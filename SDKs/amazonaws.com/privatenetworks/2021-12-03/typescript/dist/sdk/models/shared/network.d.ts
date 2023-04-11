import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkStatusEnum } from "./networkstatusenum";
/**
 * Information about a network.
 */
export declare class Network extends SpeakeasyBase {
    createdAt?: Date;
    description?: string;
    networkArn: string;
    networkName: string;
    status: NetworkStatusEnum;
    statusReason?: string;
}
