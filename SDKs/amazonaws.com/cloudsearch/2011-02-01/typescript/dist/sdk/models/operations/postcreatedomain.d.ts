import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateDomainActionEnum {
    CreateDomain = "CreateDomain"
}
export declare enum POSTCreateDomainVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class POSTCreateDomainRequest extends SpeakeasyBase {
    action: POSTCreateDomainActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateDomainVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateDomainResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
