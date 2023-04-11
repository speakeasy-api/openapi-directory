import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTVerifyDomainIdentityActionEnum {
    VerifyDomainIdentity = "VerifyDomainIdentity"
}
export declare enum POSTVerifyDomainIdentityVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTVerifyDomainIdentityRequest extends SpeakeasyBase {
    action: POSTVerifyDomainIdentityActionEnum;
    requestBody?: Uint8Array;
    version: POSTVerifyDomainIdentityVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTVerifyDomainIdentityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
