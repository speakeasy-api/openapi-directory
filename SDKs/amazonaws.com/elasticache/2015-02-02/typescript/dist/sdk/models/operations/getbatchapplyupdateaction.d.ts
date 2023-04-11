import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETBatchApplyUpdateActionActionEnum {
    BatchApplyUpdateAction = "BatchApplyUpdateAction"
}
export declare enum GETBatchApplyUpdateActionVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GETBatchApplyUpdateActionRequest extends SpeakeasyBase {
    action: GETBatchApplyUpdateActionActionEnum;
    /**
     * The cache cluster IDs
     */
    cacheClusterIds?: string[];
    /**
     * The replication group IDs
     */
    replicationGroupIds?: string[];
    /**
     * The unique ID of the service update
     */
    serviceUpdateName: string;
    version: GETBatchApplyUpdateActionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETBatchApplyUpdateActionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
