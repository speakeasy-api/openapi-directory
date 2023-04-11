import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribePublisherActionEnum {
    DescribePublisher = "DescribePublisher"
}
export declare enum POSTDescribePublisherVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTDescribePublisherRequest extends SpeakeasyBase {
    action: POSTDescribePublisherActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribePublisherVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribePublisherResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
