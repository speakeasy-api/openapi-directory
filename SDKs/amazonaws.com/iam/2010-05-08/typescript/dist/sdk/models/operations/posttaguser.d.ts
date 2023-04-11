import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTTagUserActionEnum {
    TagUser = "TagUser"
}
export declare enum POSTTagUserVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTTagUserRequest extends SpeakeasyBase {
    action: POSTTagUserActionEnum;
    requestBody?: Uint8Array;
    version: POSTTagUserVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTTagUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
