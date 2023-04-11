import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteDomainActionEnum {
    DeleteDomain = "DeleteDomain"
}
export declare enum GETDeleteDomainVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class GETDeleteDomainRequest extends SpeakeasyBase {
    action: GETDeleteDomainActionEnum;
    domainName: string;
    version: GETDeleteDomainVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteDomainResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
