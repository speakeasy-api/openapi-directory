import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDownloadDBLogFilePortionActionEnum {
    DownloadDBLogFilePortion = "DownloadDBLogFilePortion"
}
export declare enum POSTDownloadDBLogFilePortionVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class POSTDownloadDBLogFilePortionRequest extends SpeakeasyBase {
    action: POSTDownloadDBLogFilePortionActionEnum;
    requestBody?: Uint8Array;
    version: POSTDownloadDBLogFilePortionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDownloadDBLogFilePortionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
