import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteClusterSubnetGroupActionEnum {
    DeleteClusterSubnetGroup = "DeleteClusterSubnetGroup"
}
export declare enum GETDeleteClusterSubnetGroupVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETDeleteClusterSubnetGroupRequest extends SpeakeasyBase {
    action: GETDeleteClusterSubnetGroupActionEnum;
    /**
     * The name of the cluster subnet group name to be deleted.
     */
    clusterSubnetGroupName: string;
    version: GETDeleteClusterSubnetGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteClusterSubnetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
