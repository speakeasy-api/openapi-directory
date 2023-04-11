import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETVerifyDomainDkimActionEnum {
    VerifyDomainDkim = "VerifyDomainDkim"
}
export declare enum GETVerifyDomainDkimVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETVerifyDomainDkimRequest extends SpeakeasyBase {
    action: GETVerifyDomainDkimActionEnum;
    /**
     * The name of the domain to be verified for Easy DKIM signing.
     */
    domain: string;
    version: GETVerifyDomainDkimVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETVerifyDomainDkimResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
