import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTIncreaseReplicaCountActionEnum {
    IncreaseReplicaCount = "IncreaseReplicaCount"
}
export declare enum POSTIncreaseReplicaCountVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class POSTIncreaseReplicaCountRequest extends SpeakeasyBase {
    action: POSTIncreaseReplicaCountActionEnum;
    requestBody?: Uint8Array;
    version: POSTIncreaseReplicaCountVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTIncreaseReplicaCountResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
