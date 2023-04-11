import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeLifecycleHooksActionEnum {
    DescribeLifecycleHooks = "DescribeLifecycleHooks"
}
export declare enum POSTDescribeLifecycleHooksVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class POSTDescribeLifecycleHooksRequest extends SpeakeasyBase {
    action: POSTDescribeLifecycleHooksActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeLifecycleHooksVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeLifecycleHooksResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
