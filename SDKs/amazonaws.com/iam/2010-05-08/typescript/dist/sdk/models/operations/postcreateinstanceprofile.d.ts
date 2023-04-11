import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateInstanceProfileActionEnum {
    CreateInstanceProfile = "CreateInstanceProfile"
}
export declare enum POSTCreateInstanceProfileVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTCreateInstanceProfileRequest extends SpeakeasyBase {
    action: POSTCreateInstanceProfileActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateInstanceProfileVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateInstanceProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
