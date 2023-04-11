import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteStackActionEnum {
    DeleteStack = "DeleteStack"
}
export declare enum POSTDeleteStackVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTDeleteStackRequest extends SpeakeasyBase {
    action: POSTDeleteStackActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteStackVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteStackResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
