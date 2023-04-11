import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDisassociateNatGatewayAddressActionEnum {
    DisassociateNatGatewayAddress = "DisassociateNatGatewayAddress"
}
export declare enum POSTDisassociateNatGatewayAddressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDisassociateNatGatewayAddressRequest extends SpeakeasyBase {
    action: POSTDisassociateNatGatewayAddressActionEnum;
    requestBody?: Uint8Array;
    version: POSTDisassociateNatGatewayAddressVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDisassociateNatGatewayAddressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
