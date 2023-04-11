import { SpeakeasyBase } from "../../../internal/utils";
import { MessageTypeEnum } from "./messagetypeenum";
import { PoolStatusEnum } from "./poolstatusenum";
/**
 * Success
 */
export declare class DeletePoolResult extends SpeakeasyBase {
    createdTimestamp?: Date;
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
