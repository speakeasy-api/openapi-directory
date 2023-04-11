import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetEbsEncryptionByDefaultActionEnum {
    GetEbsEncryptionByDefault = "GetEbsEncryptionByDefault"
}
export declare enum POSTGetEbsEncryptionByDefaultVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTGetEbsEncryptionByDefaultRequest extends SpeakeasyBase {
    action: POSTGetEbsEncryptionByDefaultActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetEbsEncryptionByDefaultVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetEbsEncryptionByDefaultResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
