import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAddRoleToDBClusterActionEnum {
    AddRoleToDBCluster = "AddRoleToDBCluster"
}
export declare enum POSTAddRoleToDBClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTAddRoleToDBClusterRequest extends SpeakeasyBase {
    action: POSTAddRoleToDBClusterActionEnum;
    requestBody?: Uint8Array;
    version: POSTAddRoleToDBClusterVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAddRoleToDBClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
