import { SpeakeasyBase } from "../../../internal/utils";
import { MessageTypeEnum } from "./messagetypeenum";
import { PoolStatusEnum } from "./poolstatusenum";
/**
 * Success
 */
export declare class UpdatePoolResult extends SpeakeasyBase {
    createdTimestamp?: Date;
    deletionProtectionEnabled?: boolean;
    messageType?: MessageTypeEnum;
    optOutListName?: string;
    poolArn?: string;
    poolId?: string;
    selfManagedOptOutsEnabled?: boolean;
    sharedRoutesEnabled?: boolean;
    status?: PoolStatusEnum;
    twoWayChannelArn?: string;
    twoWayEnabled?: boolean;
}
