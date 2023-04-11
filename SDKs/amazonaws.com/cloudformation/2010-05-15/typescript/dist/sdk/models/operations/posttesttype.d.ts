import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTTestTypeActionEnum {
    TestType = "TestType"
}
export declare enum POSTTestTypeVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTTestTypeRequest extends SpeakeasyBase {
    action: POSTTestTypeActionEnum;
    requestBody?: Uint8Array;
    version: POSTTestTypeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTTestTypeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
