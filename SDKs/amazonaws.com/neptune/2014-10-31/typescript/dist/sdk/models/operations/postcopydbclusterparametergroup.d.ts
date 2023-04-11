import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCopyDBClusterParameterGroupActionEnum {
    CopyDBClusterParameterGroup = "CopyDBClusterParameterGroup"
}
export declare enum POSTCopyDBClusterParameterGroupVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTCopyDBClusterParameterGroupRequest extends SpeakeasyBase {
    action: POSTCopyDBClusterParameterGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTCopyDBClusterParameterGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCopyDBClusterParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
