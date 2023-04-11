import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetIdentityVerificationAttributesActionEnum {
    GetIdentityVerificationAttributes = "GetIdentityVerificationAttributes"
}
export declare enum POSTGetIdentityVerificationAttributesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTGetIdentityVerificationAttributesRequest extends SpeakeasyBase {
    action: POSTGetIdentityVerificationAttributesActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetIdentityVerificationAttributesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetIdentityVerificationAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
