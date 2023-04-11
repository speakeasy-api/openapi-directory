import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteIndexFieldActionEnum {
    DeleteIndexField = "DeleteIndexField"
}
export declare enum POSTDeleteIndexFieldVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class POSTDeleteIndexFieldRequest extends SpeakeasyBase {
    action: POSTDeleteIndexFieldActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteIndexFieldVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteIndexFieldResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
