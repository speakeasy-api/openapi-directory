import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCreateDomainActionEnum {
    CreateDomain = "CreateDomain"
}
export declare enum GETCreateDomainVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class GETCreateDomainRequest extends SpeakeasyBase {
    action: GETCreateDomainActionEnum;
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
