import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeVpcClassicLinkActionEnum {
    DescribeVpcClassicLink = "DescribeVpcClassicLink"
}
export declare enum POSTDescribeVpcClassicLinkVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDescribeVpcClassicLinkRequest extends SpeakeasyBase {
    action: POSTDescribeVpcClassicLinkActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeVpcClassicLinkVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeVpcClassicLinkResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
