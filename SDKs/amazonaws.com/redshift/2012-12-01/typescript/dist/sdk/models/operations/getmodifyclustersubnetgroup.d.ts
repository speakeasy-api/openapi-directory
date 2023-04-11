import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyClusterSubnetGroupActionEnum {
    ModifyClusterSubnetGroup = "ModifyClusterSubnetGroup"
}
export declare enum GETModifyClusterSubnetGroupVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETModifyClusterSubnetGroupRequest extends SpeakeasyBase {
    action: GETModifyClusterSubnetGroupActionEnum;
    /**
     * The name of the subnet group to be modified.
     */
    clusterSubnetGroupName: string;
    /**
     * A text description of the subnet group to be modified.
     */
    description?: string;
    /**
     * An array of VPC subnet IDs. A maximum of 20 subnets can be modified in a single request.
     */
    subnetIds: string[];
    version: GETModifyClusterSubnetGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyClusterSubnetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
