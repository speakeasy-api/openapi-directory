import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAssignPrivateNatGatewayAddressActionEnum {
    AssignPrivateNatGatewayAddress = "AssignPrivateNatGatewayAddress"
}
export declare enum POSTAssignPrivateNatGatewayAddressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTAssignPrivateNatGatewayAddressRequest extends SpeakeasyBase {
    action: POSTAssignPrivateNatGatewayAddressActionEnum;
    requestBody?: Uint8Array;
    version: POSTAssignPrivateNatGatewayAddressVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAssignPrivateNatGatewayAddressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
