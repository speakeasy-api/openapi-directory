import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTEnableVpcClassicLinkActionEnum {
    EnableVpcClassicLink = "EnableVpcClassicLink"
}
export declare enum POSTEnableVpcClassicLinkVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTEnableVpcClassicLinkRequest extends SpeakeasyBase {
    action: POSTEnableVpcClassicLinkActionEnum;
    requestBody?: Uint8Array;
    version: POSTEnableVpcClassicLinkVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTEnableVpcClassicLinkResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
