import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETBatchStopUpdateActionActionEnum {
    BatchStopUpdateAction = "BatchStopUpdateAction"
}
export declare enum GETBatchStopUpdateActionVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GETBatchStopUpdateActionRequest extends SpeakeasyBase {
    action: GETBatchStopUpdateActionActionEnum;
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
    version: GETBatchStopUpdateActionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETBatchStopUpdateActionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
