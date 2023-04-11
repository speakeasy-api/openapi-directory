import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETAssociateSubnetCidrBlockActionEnum {
    AssociateSubnetCidrBlock = "AssociateSubnetCidrBlock"
}
export declare enum GETAssociateSubnetCidrBlockVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETAssociateSubnetCidrBlockRequest extends SpeakeasyBase {
    action: GETAssociateSubnetCidrBlockActionEnum;
    /**
     * The IPv6 CIDR block for your subnet. The subnet must have a /64 prefix length.
     */
    ipv6CidrBlock: string;
    /**
     * The ID of your subnet.
     */
    subnetId: string;
    version: GETAssociateSubnetCidrBlockVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETAssociateSubnetCidrBlockResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
