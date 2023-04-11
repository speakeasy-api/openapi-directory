import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTSignalResourceActionEnum {
    SignalResource = "SignalResource"
}
export declare enum POSTSignalResourceVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTSignalResourceRequest extends SpeakeasyBase {
    action: POSTSignalResourceActionEnum;
    requestBody?: Uint8Array;
    version: POSTSignalResourceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTSignalResourceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
