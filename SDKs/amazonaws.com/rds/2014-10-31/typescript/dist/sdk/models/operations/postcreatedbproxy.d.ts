import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateDBProxyActionEnum {
    CreateDBProxy = "CreateDBProxy"
}
export declare enum POSTCreateDBProxyVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTCreateDBProxyRequest extends SpeakeasyBase {
    action: POSTCreateDBProxyActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateDBProxyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateDBProxyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
