import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteDBClusterParameterGroupActionEnum {
    DeleteDBClusterParameterGroup = "DeleteDBClusterParameterGroup"
}
export declare enum POSTDeleteDBClusterParameterGroupVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTDeleteDBClusterParameterGroupRequest extends SpeakeasyBase {
    action: POSTDeleteDBClusterParameterGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteDBClusterParameterGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteDBClusterParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
