import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeConfigurationOptionsActionEnum {
    DescribeConfigurationOptions = "DescribeConfigurationOptions"
}
export declare enum POSTDescribeConfigurationOptionsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTDescribeConfigurationOptionsRequest extends SpeakeasyBase {
    action: POSTDescribeConfigurationOptionsActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeConfigurationOptionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeConfigurationOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
