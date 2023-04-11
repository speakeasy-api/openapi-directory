import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeEnvironmentHealthActionEnum {
    DescribeEnvironmentHealth = "DescribeEnvironmentHealth"
}
export declare enum POSTDescribeEnvironmentHealthVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTDescribeEnvironmentHealthRequest extends SpeakeasyBase {
    action: POSTDescribeEnvironmentHealthActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeEnvironmentHealthVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeEnvironmentHealthResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
