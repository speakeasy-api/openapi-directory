import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeactivateTypeActionEnum {
    DeactivateType = "DeactivateType"
}
export declare enum POSTDeactivateTypeVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTDeactivateTypeRequest extends SpeakeasyBase {
    action: POSTDeactivateTypeActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeactivateTypeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeactivateTypeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
