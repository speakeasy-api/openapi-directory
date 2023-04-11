import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteInstanceProfileActionEnum {
    DeleteInstanceProfile = "DeleteInstanceProfile"
}
export declare enum POSTDeleteInstanceProfileVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTDeleteInstanceProfileRequest extends SpeakeasyBase {
    action: POSTDeleteInstanceProfileActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteInstanceProfileVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteInstanceProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
