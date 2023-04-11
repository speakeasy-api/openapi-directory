import { SpeakeasyBase } from "../../../internal/utils";
import { MessageTypeEnum } from "./messagetypeenum";
import { PoolStatusEnum } from "./poolstatusenum";
/**
 * The information for a pool in an Amazon Web Services account.
 */
export declare class PoolInformation extends SpeakeasyBase {
    createdTimestamp: Date;
    deletionProtectionEnabled: boolean;
    messageType: MessageTypeEnum;
    optOutListName: string;
    poolArn: string;
    poolId: string;
    selfManagedOptOutsEnabled: boolean;
    sharedRoutesEnabled: boolean;
    status: PoolStatusEnum;
    twoWayChannelArn?: string;
    twoWayEnabled: boolean;
}
