import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateClusterSubnetGroupActionEnum {
    CreateClusterSubnetGroup = "CreateClusterSubnetGroup"
}
export declare enum POSTCreateClusterSubnetGroupVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class POSTCreateClusterSubnetGroupRequest extends SpeakeasyBase {
    action: POSTCreateClusterSubnetGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateClusterSubnetGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateClusterSubnetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
