import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDecreaseReplicaCountActionEnum {
    DecreaseReplicaCount = "DecreaseReplicaCount"
}
export declare enum POSTDecreaseReplicaCountVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class POSTDecreaseReplicaCountRequest extends SpeakeasyBase {
    action: POSTDecreaseReplicaCountActionEnum;
    requestBody?: Uint8Array;
    version: POSTDecreaseReplicaCountVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDecreaseReplicaCountResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
