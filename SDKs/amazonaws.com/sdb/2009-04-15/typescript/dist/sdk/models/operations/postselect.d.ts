import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTSelectActionEnum {
    Select = "Select"
}
export declare enum POSTSelectVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}
export declare class POSTSelectRequest extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: POSTSelectActionEnum;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: POSTSelectVersionEnum;
}
export declare class POSTSelectResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
