import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTPromoteReadReplicaActionEnum {
    PromoteReadReplica = "PromoteReadReplica"
}
export declare enum POSTPromoteReadReplicaVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class POSTPromoteReadReplicaRequest extends SpeakeasyBase {
    action: POSTPromoteReadReplicaActionEnum;
    requestBody?: Uint8Array;
    version: POSTPromoteReadReplicaVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTPromoteReadReplicaResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
