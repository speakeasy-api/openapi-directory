import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRegisterPublisherActionEnum {
    RegisterPublisher = "RegisterPublisher"
}
export declare enum POSTRegisterPublisherVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTRegisterPublisherRequest extends SpeakeasyBase {
    action: POSTRegisterPublisherActionEnum;
    requestBody?: Uint8Array;
    version: POSTRegisterPublisherVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRegisterPublisherResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
