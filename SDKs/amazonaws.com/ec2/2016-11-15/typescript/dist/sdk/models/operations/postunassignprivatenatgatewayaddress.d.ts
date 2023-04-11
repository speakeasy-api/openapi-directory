import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTUnassignPrivateNatGatewayAddressActionEnum {
    UnassignPrivateNatGatewayAddress = "UnassignPrivateNatGatewayAddress"
}
export declare enum POSTUnassignPrivateNatGatewayAddressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTUnassignPrivateNatGatewayAddressRequest extends SpeakeasyBase {
    action: POSTUnassignPrivateNatGatewayAddressActionEnum;
    requestBody?: Uint8Array;
    version: POSTUnassignPrivateNatGatewayAddressVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTUnassignPrivateNatGatewayAddressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
