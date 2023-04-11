import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCreateNetworkInterfacePermissionActionEnum {
    CreateNetworkInterfacePermission = "CreateNetworkInterfacePermission"
}
/**
 * The type of permission to grant.
 */
export declare enum GETCreateNetworkInterfacePermissionPermissionEnum {
    InstanceAttach = "INSTANCE-ATTACH",
    EipAssociate = "EIP-ASSOCIATE"
}
export declare enum GETCreateNetworkInterfacePermissionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETCreateNetworkInterfacePermissionRequest extends SpeakeasyBase {
    action: GETCreateNetworkInterfacePermissionActionEnum;
    /**
     * The Amazon Web Services account ID.
     */
    awsAccountId?: string;
    /**
     * The Amazon Web Service. Currently not supported.
     */
    awsService?: string;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the network interface.
     */
    networkInterfaceId: string;
    /**
     * The type of permission to grant.
     */
    permission: GETCreateNetworkInterfacePermissionPermissionEnum;
    version: GETCreateNetworkInterfacePermissionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETCreateNetworkInterfacePermissionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
