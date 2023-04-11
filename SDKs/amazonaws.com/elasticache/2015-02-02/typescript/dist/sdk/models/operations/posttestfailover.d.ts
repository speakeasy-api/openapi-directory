import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTTestFailoverActionEnum {
    TestFailover = "TestFailover"
}
export declare enum POSTTestFailoverVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class POSTTestFailoverRequest extends SpeakeasyBase {
    action: POSTTestFailoverActionEnum;
    requestBody?: Uint8Array;
    version: POSTTestFailoverVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTTestFailoverResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
