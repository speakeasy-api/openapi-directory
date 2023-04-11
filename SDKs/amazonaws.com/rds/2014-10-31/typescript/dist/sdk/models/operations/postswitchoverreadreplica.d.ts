import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTSwitchoverReadReplicaActionEnum {
    SwitchoverReadReplica = "SwitchoverReadReplica"
}
export declare enum POSTSwitchoverReadReplicaVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTSwitchoverReadReplicaRequest extends SpeakeasyBase {
    action: POSTSwitchoverReadReplicaActionEnum;
    requestBody?: Uint8Array;
    version: POSTSwitchoverReadReplicaVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTSwitchoverReadReplicaResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
