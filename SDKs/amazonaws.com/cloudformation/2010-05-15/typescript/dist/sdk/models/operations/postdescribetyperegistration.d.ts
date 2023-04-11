import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeTypeRegistrationActionEnum {
    DescribeTypeRegistration = "DescribeTypeRegistration"
}
export declare enum POSTDescribeTypeRegistrationVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTDescribeTypeRegistrationRequest extends SpeakeasyBase {
    action: POSTDescribeTypeRegistrationActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeTypeRegistrationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeTypeRegistrationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
