import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeChangeSetHooksActionEnum {
    DescribeChangeSetHooks = "DescribeChangeSetHooks"
}
export declare enum POSTDescribeChangeSetHooksVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTDescribeChangeSetHooksRequest extends SpeakeasyBase {
    action: POSTDescribeChangeSetHooksActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeChangeSetHooksVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeChangeSetHooksResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
