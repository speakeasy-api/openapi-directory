import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTSetTypeDefaultVersionActionEnum {
    SetTypeDefaultVersion = "SetTypeDefaultVersion"
}
export declare enum POSTSetTypeDefaultVersionVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTSetTypeDefaultVersionRequest extends SpeakeasyBase {
    action: POSTSetTypeDefaultVersionActionEnum;
    requestBody?: Uint8Array;
    version: POSTSetTypeDefaultVersionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTSetTypeDefaultVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
