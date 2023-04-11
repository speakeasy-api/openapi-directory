import { SpeakeasyBase } from "../../../internal/utils";
import { MessageTypeEnum } from "./messagetypeenum";
import { PoolStatusEnum } from "./poolstatusenum";
import { Tag } from "./tag";
/**
 * Success
 */
export declare class CreatePoolResult extends SpeakeasyBase {
    createdTimestamp?: Date;
    deletionProtectionEnabled?: boolean;
    messageType?: MessageTypeEnum;
    optOutListName?: string;
    poolArn?: string;
    poolId?: string;
    selfManagedOptOutsEnabled?: boolean;
    sharedRoutesEnabled?: boolean;
    status?: PoolStatusEnum;
    tags?: Tag[];
    twoWayChannelArn?: string;
    twoWayEnabled?: boolean;
}
