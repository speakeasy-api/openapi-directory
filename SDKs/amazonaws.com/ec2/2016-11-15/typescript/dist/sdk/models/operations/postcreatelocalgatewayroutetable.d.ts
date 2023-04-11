import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateLocalGatewayRouteTableActionEnum {
    CreateLocalGatewayRouteTable = "CreateLocalGatewayRouteTable"
}
export declare enum POSTCreateLocalGatewayRouteTableVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateLocalGatewayRouteTableRequest extends SpeakeasyBase {
    action: POSTCreateLocalGatewayRouteTableActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateLocalGatewayRouteTableVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateLocalGatewayRouteTableResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
