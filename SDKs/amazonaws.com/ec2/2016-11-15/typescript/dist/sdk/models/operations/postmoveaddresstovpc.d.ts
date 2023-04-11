import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTMoveAddressToVpcActionEnum {
    MoveAddressToVpc = "MoveAddressToVpc"
}
export declare enum POSTMoveAddressToVpcVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTMoveAddressToVpcRequest extends SpeakeasyBase {
    action: POSTMoveAddressToVpcActionEnum;
    requestBody?: Uint8Array;
    version: POSTMoveAddressToVpcVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTMoveAddressToVpcResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
