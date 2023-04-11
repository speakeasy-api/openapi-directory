import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeTargetHealthActionEnum {
    DescribeTargetHealth = "DescribeTargetHealth"
}
export declare enum POSTDescribeTargetHealthVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class POSTDescribeTargetHealthRequest extends SpeakeasyBase {
    action: POSTDescribeTargetHealthActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeTargetHealthVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeTargetHealthResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
