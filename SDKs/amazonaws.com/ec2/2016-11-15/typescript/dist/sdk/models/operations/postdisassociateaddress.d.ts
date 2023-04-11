import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDisassociateAddressActionEnum {
    DisassociateAddress = "DisassociateAddress"
}
export declare enum POSTDisassociateAddressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDisassociateAddressRequest extends SpeakeasyBase {
    action: POSTDisassociateAddressActionEnum;
    requestBody?: Uint8Array;
    version: POSTDisassociateAddressVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDisassociateAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
