import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceGroupStateEnum } from "./instancegroupstateenum";
import { InstanceRoleTypeEnum } from "./instanceroletypeenum";
import { MarketTypeEnum } from "./markettypeenum";
/**
 * Detailed information about an instance group.
 */
export declare class InstanceGroupDetail extends SpeakeasyBase {
    bidPrice?: string;
    creationDateTime: Date;
    customAmiId?: string;
    endDateTime?: Date;
    instanceGroupId?: string;
    instanceRequestCount: number;
    instanceRole: InstanceRoleTypeEnum;
    instanceRunningCount: number;
    instanceType: string;
    lastStateChangeReason?: string;
    market: MarketTypeEnum;
    name?: string;
    readyDateTime?: Date;
    startDateTime?: Date;
    state: InstanceGroupStateEnum;
}
