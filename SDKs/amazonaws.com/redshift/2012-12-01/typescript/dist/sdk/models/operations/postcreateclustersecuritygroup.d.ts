import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateClusterSecurityGroupActionEnum {
    CreateClusterSecurityGroup = "CreateClusterSecurityGroup"
}
export declare enum POSTCreateClusterSecurityGroupVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class POSTCreateClusterSecurityGroupRequest extends SpeakeasyBase {
    action: POSTCreateClusterSecurityGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateClusterSecurityGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateClusterSecurityGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
