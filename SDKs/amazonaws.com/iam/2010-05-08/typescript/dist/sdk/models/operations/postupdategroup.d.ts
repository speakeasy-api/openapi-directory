import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTUpdateGroupActionEnum {
    UpdateGroup = "UpdateGroup"
}
export declare enum POSTUpdateGroupVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTUpdateGroupRequest extends SpeakeasyBase {
    action: POSTUpdateGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTUpdateGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTUpdateGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
