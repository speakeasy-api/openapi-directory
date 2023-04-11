import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRemoveRoleFromDBClusterActionEnum {
    RemoveRoleFromDBCluster = "RemoveRoleFromDBCluster"
}
export declare enum POSTRemoveRoleFromDBClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTRemoveRoleFromDBClusterRequest extends SpeakeasyBase {
    action: POSTRemoveRoleFromDBClusterActionEnum;
    requestBody?: Uint8Array;
    version: POSTRemoveRoleFromDBClusterVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRemoveRoleFromDBClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
