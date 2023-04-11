import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETReplaceNetworkAclAssociationActionEnum {
    ReplaceNetworkAclAssociation = "ReplaceNetworkAclAssociation"
}
export declare enum GETReplaceNetworkAclAssociationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETReplaceNetworkAclAssociationRequest extends SpeakeasyBase {
    action: GETReplaceNetworkAclAssociationActionEnum;
    /**
     * The ID of the current association between the original network ACL and the subnet.
     */
    associationId: string;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the new network ACL to associate with the subnet.
     */
    networkAclId: string;
    version: GETReplaceNetworkAclAssociationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETReplaceNetworkAclAssociationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
