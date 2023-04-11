import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDisableVpcClassicLinkDnsSupportActionEnum {
    DisableVpcClassicLinkDnsSupport = "DisableVpcClassicLinkDnsSupport"
}
export declare enum GETDisableVpcClassicLinkDnsSupportVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDisableVpcClassicLinkDnsSupportRequest extends SpeakeasyBase {
    action: GETDisableVpcClassicLinkDnsSupportActionEnum;
    version: GETDisableVpcClassicLinkDnsSupportVersionEnum;
    /**
     * The ID of the VPC.
     */
    vpcId?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDisableVpcClassicLinkDnsSupportResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
