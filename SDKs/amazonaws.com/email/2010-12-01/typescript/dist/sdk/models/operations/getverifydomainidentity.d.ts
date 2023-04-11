import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETVerifyDomainIdentityActionEnum {
    VerifyDomainIdentity = "VerifyDomainIdentity"
}
export declare enum GETVerifyDomainIdentityVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETVerifyDomainIdentityRequest extends SpeakeasyBase {
    action: GETVerifyDomainIdentityActionEnum;
    /**
     * The domain to be verified.
     */
    domain: string;
    version: GETVerifyDomainIdentityVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETVerifyDomainIdentityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
