import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTVerifyDomainDkimActionEnum {
    VerifyDomainDkim = "VerifyDomainDkim"
}
export declare enum POSTVerifyDomainDkimVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTVerifyDomainDkimRequest extends SpeakeasyBase {
    action: POSTVerifyDomainDkimActionEnum;
    requestBody?: Uint8Array;
    version: POSTVerifyDomainDkimVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTVerifyDomainDkimResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
