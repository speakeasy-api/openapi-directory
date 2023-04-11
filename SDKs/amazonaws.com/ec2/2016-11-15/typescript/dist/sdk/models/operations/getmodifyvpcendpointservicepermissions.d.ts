import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyVpcEndpointServicePermissionsActionEnum {
    ModifyVpcEndpointServicePermissions = "ModifyVpcEndpointServicePermissions"
}
export declare enum GETModifyVpcEndpointServicePermissionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETModifyVpcEndpointServicePermissionsRequest extends SpeakeasyBase {
    action: GETModifyVpcEndpointServicePermissionsActionEnum;
    /**
     * The Amazon Resource Names (ARN) of the principals. Permissions are granted to the principals in this list. To grant permissions to all principals, specify an asterisk (*).
     */
    addAllowedPrincipals?: string[];
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The Amazon Resource Names (ARN) of the principals. Permissions are revoked for principals in this list.
     */
    removeAllowedPrincipals?: string[];
    /**
     * The ID of the service.
     */
    serviceId: string;
    version: GETModifyVpcEndpointServicePermissionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyVpcEndpointServicePermissionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
