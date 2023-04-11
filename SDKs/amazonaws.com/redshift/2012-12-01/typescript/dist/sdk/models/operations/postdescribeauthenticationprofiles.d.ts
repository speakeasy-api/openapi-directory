import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeAuthenticationProfilesActionEnum {
    DescribeAuthenticationProfiles = "DescribeAuthenticationProfiles"
}
export declare enum POSTDescribeAuthenticationProfilesVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class POSTDescribeAuthenticationProfilesRequest extends SpeakeasyBase {
    action: POSTDescribeAuthenticationProfilesActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeAuthenticationProfilesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeAuthenticationProfilesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
