import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetClusterCredentialsActionEnum {
    GetClusterCredentials = "GetClusterCredentials"
}
export declare enum POSTGetClusterCredentialsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class POSTGetClusterCredentialsRequest extends SpeakeasyBase {
    action: POSTGetClusterCredentialsActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetClusterCredentialsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetClusterCredentialsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
