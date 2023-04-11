import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTUpdateStackSetActionEnum {
    UpdateStackSet = "UpdateStackSet"
}
export declare enum POSTUpdateStackSetVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTUpdateStackSetRequest extends SpeakeasyBase {
    action: POSTUpdateStackSetActionEnum;
    requestBody?: Uint8Array;
    version: POSTUpdateStackSetVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTUpdateStackSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
