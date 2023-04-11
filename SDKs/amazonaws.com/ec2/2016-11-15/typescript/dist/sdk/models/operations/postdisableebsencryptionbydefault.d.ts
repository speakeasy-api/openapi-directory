import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDisableEbsEncryptionByDefaultActionEnum {
    DisableEbsEncryptionByDefault = "DisableEbsEncryptionByDefault"
}
export declare enum POSTDisableEbsEncryptionByDefaultVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDisableEbsEncryptionByDefaultRequest extends SpeakeasyBase {
    action: POSTDisableEbsEncryptionByDefaultActionEnum;
    requestBody?: Uint8Array;
    version: POSTDisableEbsEncryptionByDefaultVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDisableEbsEncryptionByDefaultResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
