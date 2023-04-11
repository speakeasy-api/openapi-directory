import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeChangeSetActionEnum {
    DescribeChangeSet = "DescribeChangeSet"
}
export declare enum POSTDescribeChangeSetVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTDescribeChangeSetRequest extends SpeakeasyBase {
    action: POSTDescribeChangeSetActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeChangeSetVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeChangeSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
