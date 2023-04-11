import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDisassociateSubnetCidrBlockActionEnum {
    DisassociateSubnetCidrBlock = "DisassociateSubnetCidrBlock"
}
export declare enum GETDisassociateSubnetCidrBlockVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDisassociateSubnetCidrBlockRequest extends SpeakeasyBase {
    action: GETDisassociateSubnetCidrBlockActionEnum;
    /**
     * The association ID for the CIDR block.
     */
    associationId: string;
    version: GETDisassociateSubnetCidrBlockVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDisassociateSubnetCidrBlockResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
