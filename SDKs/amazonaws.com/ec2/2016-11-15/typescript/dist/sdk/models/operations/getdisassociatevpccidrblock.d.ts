import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDisassociateVpcCidrBlockActionEnum {
    DisassociateVpcCidrBlock = "DisassociateVpcCidrBlock"
}
export declare enum GETDisassociateVpcCidrBlockVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDisassociateVpcCidrBlockRequest extends SpeakeasyBase {
    action: GETDisassociateVpcCidrBlockActionEnum;
    /**
     * The association ID for the CIDR block.
     */
    associationId: string;
    version: GETDisassociateVpcCidrBlockVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDisassociateVpcCidrBlockResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
