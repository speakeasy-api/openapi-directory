import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetLoginProfileActionEnum {
    GetLoginProfile = "GetLoginProfile"
}
export declare enum POSTGetLoginProfileVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTGetLoginProfileRequest extends SpeakeasyBase {
    action: POSTGetLoginProfileActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetLoginProfileVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetLoginProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
