import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETAssociateRouteTableActionEnum {
    AssociateRouteTable = "AssociateRouteTable"
}
export declare enum GETAssociateRouteTableVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETAssociateRouteTableRequest extends SpeakeasyBase {
    action: GETAssociateRouteTableActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the internet gateway or virtual private gateway.
     */
    gatewayId?: string;
    /**
     * The ID of the route table.
     */
    routeTableId: string;
    /**
     * The ID of the subnet.
     */
    subnetId?: string;
    version: GETAssociateRouteTableVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETAssociateRouteTableResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
