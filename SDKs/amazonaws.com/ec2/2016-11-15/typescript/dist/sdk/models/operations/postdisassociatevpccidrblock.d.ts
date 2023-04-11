import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDisassociateVpcCidrBlockActionEnum {
    DisassociateVpcCidrBlock = "DisassociateVpcCidrBlock"
}
export declare enum POSTDisassociateVpcCidrBlockVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDisassociateVpcCidrBlockRequest extends SpeakeasyBase {
    action: POSTDisassociateVpcCidrBlockActionEnum;
    requestBody?: Uint8Array;
    version: POSTDisassociateVpcCidrBlockVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDisassociateVpcCidrBlockResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
