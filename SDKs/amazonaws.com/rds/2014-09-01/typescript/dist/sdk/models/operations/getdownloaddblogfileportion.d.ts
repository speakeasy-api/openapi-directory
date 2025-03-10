import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDownloadDBLogFilePortionActionEnum {
    DownloadDBLogFilePortion = "DownloadDBLogFilePortion"
}
export declare enum GETDownloadDBLogFilePortionVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class GETDownloadDBLogFilePortionRequest extends SpeakeasyBase {
    action: GETDownloadDBLogFilePortionActionEnum;
    dbInstanceIdentifier: string;
    logFileName: string;
    marker?: string;
    numberOfLines?: number;
    version: GETDownloadDBLogFilePortionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDownloadDBLogFilePortionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
