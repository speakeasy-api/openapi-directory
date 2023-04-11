import { SpeakeasyBase } from "../../../internal/utils";
export declare class ModifyGlobalReplicationGroupMessage extends SpeakeasyBase {
    applyImmediately: boolean;
    automaticFailoverEnabled?: boolean;
    cacheNodeType?: string;
    cacheParameterGroupName?: string;
    engineVersion?: string;
    globalReplicationGroupDescription?: string;
    globalReplicationGroupId: string;
}
