import { SpeakeasyBase } from "../../../internal/utils";
export declare class BatchStopUpdateActionMessage extends SpeakeasyBase {
    cacheClusterIds?: string[];
    replicationGroupIds?: string[];
    serviceUpdateName: string;
}
