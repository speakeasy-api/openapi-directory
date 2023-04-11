import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyClusterIamRolesActionEnum {
    ModifyClusterIamRoles = "ModifyClusterIamRoles"
}
export declare enum GETModifyClusterIamRolesVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETModifyClusterIamRolesRequest extends SpeakeasyBase {
    action: GETModifyClusterIamRolesActionEnum;
    /**
     * Zero or more IAM roles to associate with the cluster. The roles must be in their Amazon Resource Name (ARN) format.
     */
    addIamRoles?: string[];
    /**
     * The unique identifier of the cluster for which you want to associate or disassociate IAM roles.
     */
    clusterIdentifier: string;
    /**
     * The Amazon Resource Name (ARN) for the IAM role that was set as default for the cluster when the cluster was last modified.
     */
    defaultIamRoleArn?: string;
    /**
     * Zero or more IAM roles in ARN format to disassociate from the cluster.
     */
    removeIamRoles?: string[];
    version: GETModifyClusterIamRolesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyClusterIamRolesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
