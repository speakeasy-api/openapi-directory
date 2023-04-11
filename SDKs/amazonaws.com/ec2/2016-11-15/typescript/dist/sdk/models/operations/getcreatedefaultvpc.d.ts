import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCreateDefaultVpcActionEnum {
    CreateDefaultVpc = "CreateDefaultVpc"
}
export declare enum GETCreateDefaultVpcVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETCreateDefaultVpcRequest extends SpeakeasyBase {
    action: GETCreateDefaultVpcActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    version: GETCreateDefaultVpcVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETCreateDefaultVpcResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
