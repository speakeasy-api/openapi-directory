import { SpeakeasyBase } from "../../../internal/utils";
import { RegionalConfigurationList } from "./regionalconfigurationlist";
export declare class IncreaseNodeGroupsInGlobalReplicationGroupMessage extends SpeakeasyBase {
    applyImmediately: boolean;
    globalReplicationGroupId: string;
    nodeGroupCount: number;
    regionalConfigurations?: RegionalConfigurationList[];
}
