import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAssociateRouteTableActionEnum {
    AssociateRouteTable = "AssociateRouteTable"
}
export declare enum POSTAssociateRouteTableVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTAssociateRouteTableRequest extends SpeakeasyBase {
    action: POSTAssociateRouteTableActionEnum;
    requestBody?: Uint8Array;
    version: POSTAssociateRouteTableVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAssociateRouteTableResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
