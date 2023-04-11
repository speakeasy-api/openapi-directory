import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAssociateSubnetCidrBlockActionEnum {
    AssociateSubnetCidrBlock = "AssociateSubnetCidrBlock"
}
export declare enum POSTAssociateSubnetCidrBlockVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTAssociateSubnetCidrBlockRequest extends SpeakeasyBase {
    action: POSTAssociateSubnetCidrBlockActionEnum;
    requestBody?: Uint8Array;
    version: POSTAssociateSubnetCidrBlockVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAssociateSubnetCidrBlockResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
