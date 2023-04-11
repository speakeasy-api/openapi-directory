import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteStackSetActionEnum {
    DeleteStackSet = "DeleteStackSet"
}
export declare enum POSTDeleteStackSetVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTDeleteStackSetRequest extends SpeakeasyBase {
    action: POSTDeleteStackSetActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteStackSetVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteStackSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
