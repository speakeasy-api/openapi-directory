import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTUpdateStackActionEnum {
    UpdateStack = "UpdateStack"
}
export declare enum POSTUpdateStackVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTUpdateStackRequest extends SpeakeasyBase {
    action: POSTUpdateStackActionEnum;
    requestBody?: Uint8Array;
    version: POSTUpdateStackVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTUpdateStackResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
