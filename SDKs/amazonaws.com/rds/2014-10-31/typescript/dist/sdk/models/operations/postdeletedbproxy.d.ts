import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteDBProxyActionEnum {
    DeleteDBProxy = "DeleteDBProxy"
}
export declare enum POSTDeleteDBProxyVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTDeleteDBProxyRequest extends SpeakeasyBase {
    action: POSTDeleteDBProxyActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteDBProxyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteDBProxyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
