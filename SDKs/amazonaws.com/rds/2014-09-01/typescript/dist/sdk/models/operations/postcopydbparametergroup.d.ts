import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCopyDBParameterGroupActionEnum {
    CopyDBParameterGroup = "CopyDBParameterGroup"
}
export declare enum POSTCopyDBParameterGroupVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class POSTCopyDBParameterGroupRequest extends SpeakeasyBase {
    action: POSTCopyDBParameterGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTCopyDBParameterGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCopyDBParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
