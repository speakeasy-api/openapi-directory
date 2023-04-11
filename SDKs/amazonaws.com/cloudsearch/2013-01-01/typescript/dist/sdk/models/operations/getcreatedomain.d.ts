import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCreateDomainActionEnum {
    CreateDomain = "CreateDomain"
}
export declare enum GETCreateDomainVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class GETCreateDomainRequest extends SpeakeasyBase {
    action: GETCreateDomainActionEnum;
    /**
     * A name for the domain you are creating. Allowed characters are a-z (lower-case letters), 0-9, and hyphen (-). Domain names must start with a letter or number and be at least 3 and no more than 28 characters long.
     */
    domainName: string;
    version: GETCreateDomainVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETCreateDomainResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
