import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETUpdateServiceAccessPoliciesActionEnum {
    UpdateServiceAccessPolicies = "UpdateServiceAccessPolicies"
}
export declare enum GETUpdateServiceAccessPoliciesVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class GETUpdateServiceAccessPoliciesRequest extends SpeakeasyBase {
    accessPolicies: string;
    action: GETUpdateServiceAccessPoliciesActionEnum;
    domainName: string;
    version: GETUpdateServiceAccessPoliciesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETUpdateServiceAccessPoliciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
