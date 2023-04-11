import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETTestFailoverActionEnum {
    TestFailover = "TestFailover"
}
export declare enum GETTestFailoverVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GETTestFailoverRequest extends SpeakeasyBase {
    action: GETTestFailoverActionEnum;
    /**
     * The name of the node group (called shard in the console) in this replication group on which automatic failover is to be tested. You may test automatic failover on up to 5 node groups in any rolling 24-hour period.
     */
    nodeGroupId: string;
    /**
     * The name of the replication group (console: cluster) whose automatic failover is being tested by this operation.
     */
    replicationGroupId: string;
    version: GETTestFailoverVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETTestFailoverResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
