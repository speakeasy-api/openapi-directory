import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDefineAnalysisSchemeActionEnum {
    DefineAnalysisScheme = "DefineAnalysisScheme"
}
export declare enum POSTDefineAnalysisSchemeVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class POSTDefineAnalysisSchemeRequest extends SpeakeasyBase {
    action: POSTDefineAnalysisSchemeActionEnum;
    requestBody?: Uint8Array;
    version: POSTDefineAnalysisSchemeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDefineAnalysisSchemeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
