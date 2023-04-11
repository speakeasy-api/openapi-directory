import { SpeakeasyBase } from "../../../internal/utils";
export declare class BatchApplyUpdateActionMessage extends SpeakeasyBase {
    cacheClusterIds?: string[];
    replicationGroupIds?: string[];
    serviceUpdateName: string;
}
