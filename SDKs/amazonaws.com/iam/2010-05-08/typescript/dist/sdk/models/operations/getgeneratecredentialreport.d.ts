import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETGenerateCredentialReportActionEnum {
    GenerateCredentialReport = "GenerateCredentialReport"
}
export declare enum GETGenerateCredentialReportVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GETGenerateCredentialReportRequest extends SpeakeasyBase {
    action: GETGenerateCredentialReportActionEnum;
    version: GETGenerateCredentialReportVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETGenerateCredentialReportResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
