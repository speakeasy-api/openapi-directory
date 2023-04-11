import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTPublishTypeActionEnum {
    PublishType = "PublishType"
}
export declare enum POSTPublishTypeVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTPublishTypeRequest extends SpeakeasyBase {
    action: POSTPublishTypeActionEnum;
    requestBody?: Uint8Array;
    version: POSTPublishTypeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTPublishTypeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
