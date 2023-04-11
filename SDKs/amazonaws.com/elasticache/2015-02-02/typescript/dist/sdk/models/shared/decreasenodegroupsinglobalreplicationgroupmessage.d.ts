import { SpeakeasyBase } from "../../../internal/utils";
export declare class DecreaseNodeGroupsInGlobalReplicationGroupMessage extends SpeakeasyBase {
    applyImmediately: boolean;
    globalNodeGroupsToRemove?: string[];
    globalNodeGroupsToRetain?: string[];
    globalReplicationGroupId: string;
    nodeGroupCount: number;
}
