import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGenerateCredentialReportActionEnum {
    GenerateCredentialReport = "GenerateCredentialReport"
}
export declare enum POSTGenerateCredentialReportVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTGenerateCredentialReportRequest extends SpeakeasyBase {
    action: POSTGenerateCredentialReportActionEnum;
    version: POSTGenerateCredentialReportVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGenerateCredentialReportResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
