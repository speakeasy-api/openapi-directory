import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDisableVgwRoutePropagationActionEnum {
    DisableVgwRoutePropagation = "DisableVgwRoutePropagation"
}
export declare enum GETDisableVgwRoutePropagationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDisableVgwRoutePropagationRequest extends SpeakeasyBase {
    action: GETDisableVgwRoutePropagationActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the virtual private gateway.
     */
    gatewayId: string;
    /**
     * The ID of the route table.
     */
    routeTableId: string;
    version: GETDisableVgwRoutePropagationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDisableVgwRoutePropagationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
