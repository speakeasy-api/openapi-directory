import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCancelUpdateStackActionEnum {
    CancelUpdateStack = "CancelUpdateStack"
}
export declare enum POSTCancelUpdateStackVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTCancelUpdateStackRequest extends SpeakeasyBase {
    action: POSTCancelUpdateStackActionEnum;
    requestBody?: Uint8Array;
    version: POSTCancelUpdateStackVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCancelUpdateStackResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
