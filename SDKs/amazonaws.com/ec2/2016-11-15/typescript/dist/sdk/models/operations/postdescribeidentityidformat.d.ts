import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeIdentityIdFormatActionEnum {
    DescribeIdentityIdFormat = "DescribeIdentityIdFormat"
}
export declare enum POSTDescribeIdentityIdFormatVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDescribeIdentityIdFormatRequest extends SpeakeasyBase {
    action: POSTDescribeIdentityIdFormatActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeIdentityIdFormatVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeIdentityIdFormatResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
