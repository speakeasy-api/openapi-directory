import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteAnalysisSchemeActionEnum {
    DeleteAnalysisScheme = "DeleteAnalysisScheme"
}
export declare enum POSTDeleteAnalysisSchemeVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class POSTDeleteAnalysisSchemeRequest extends SpeakeasyBase {
    action: POSTDeleteAnalysisSchemeActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteAnalysisSchemeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteAnalysisSchemeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
