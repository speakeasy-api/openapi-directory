import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTEnableVpcClassicLinkDnsSupportActionEnum {
    EnableVpcClassicLinkDnsSupport = "EnableVpcClassicLinkDnsSupport"
}
export declare enum POSTEnableVpcClassicLinkDnsSupportVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTEnableVpcClassicLinkDnsSupportRequest extends SpeakeasyBase {
    action: POSTEnableVpcClassicLinkDnsSupportActionEnum;
    requestBody?: Uint8Array;
    version: POSTEnableVpcClassicLinkDnsSupportVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTEnableVpcClassicLinkDnsSupportResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
