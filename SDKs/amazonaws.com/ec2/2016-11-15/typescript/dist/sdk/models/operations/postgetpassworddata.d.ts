import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetPasswordDataActionEnum {
    GetPasswordData = "GetPasswordData"
}
export declare enum POSTGetPasswordDataVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTGetPasswordDataRequest extends SpeakeasyBase {
    action: POSTGetPasswordDataActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetPasswordDataVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetPasswordDataResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
