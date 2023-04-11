import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetCredentialReportActionEnum {
    GetCredentialReport = "GetCredentialReport"
}
export declare enum POSTGetCredentialReportVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTGetCredentialReportRequest extends SpeakeasyBase {
    action: POSTGetCredentialReportActionEnum;
    version: POSTGetCredentialReportVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetCredentialReportResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
