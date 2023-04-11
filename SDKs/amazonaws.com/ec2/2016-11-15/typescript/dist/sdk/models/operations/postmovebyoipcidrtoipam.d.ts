import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTMoveByoipCidrToIpamActionEnum {
    MoveByoipCidrToIpam = "MoveByoipCidrToIpam"
}
export declare enum POSTMoveByoipCidrToIpamVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTMoveByoipCidrToIpamRequest extends SpeakeasyBase {
    action: POSTMoveByoipCidrToIpamActionEnum;
    requestBody?: Uint8Array;
    version: POSTMoveByoipCidrToIpamVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTMoveByoipCidrToIpamResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
