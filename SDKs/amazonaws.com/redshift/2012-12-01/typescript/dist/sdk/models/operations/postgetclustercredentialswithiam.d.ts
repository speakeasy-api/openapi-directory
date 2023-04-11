import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetClusterCredentialsWithIAMActionEnum {
    GetClusterCredentialsWithIAM = "GetClusterCredentialsWithIAM"
}
export declare enum POSTGetClusterCredentialsWithIAMVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class POSTGetClusterCredentialsWithIAMRequest extends SpeakeasyBase {
    action: POSTGetClusterCredentialsWithIAMActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetClusterCredentialsWithIAMVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetClusterCredentialsWithIAMResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
