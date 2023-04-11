import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETGETCredentialReportActionEnum {
    GetCredentialReport = "GetCredentialReport"
}
export declare enum GETGETCredentialReportVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GETGETCredentialReportRequest extends SpeakeasyBase {
    action: GETGETCredentialReportActionEnum;
    version: GETGETCredentialReportVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETGETCredentialReportResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
