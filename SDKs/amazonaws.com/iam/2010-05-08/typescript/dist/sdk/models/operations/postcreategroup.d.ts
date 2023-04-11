import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateGroupActionEnum {
    CreateGroup = "CreateGroup"
}
export declare enum POSTCreateGroupVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTCreateGroupRequest extends SpeakeasyBase {
    action: POSTCreateGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
