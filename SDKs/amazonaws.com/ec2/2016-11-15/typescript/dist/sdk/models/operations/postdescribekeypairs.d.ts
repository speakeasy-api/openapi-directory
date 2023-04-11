import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeKeyPairsActionEnum {
    DescribeKeyPairs = "DescribeKeyPairs"
}
export declare enum POSTDescribeKeyPairsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDescribeKeyPairsRequest extends SpeakeasyBase {
    action: POSTDescribeKeyPairsActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeKeyPairsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeKeyPairsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
